import React from 'react';

import { connect } from 'react-redux';

import Classes from './Layout.css';
import Aux from '../Auxw/Auxw';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    state = {
        showSideDrawer: false,
    }
    const sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    const sideDrawerToggleHandler =() => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    return (
        <Aux>
            <Toolbar 
                isAuth={this.props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer 
                isAuth={this.props.isAuthenticated}
                open={ this.state.showSideDrawer }
                closed={ sideDrawerClosedHandler }
            />
            <div> Toolbar, SideDrawer, BackDrop </div>
            <main className={Classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps)(Layout);