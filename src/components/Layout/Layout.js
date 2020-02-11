import React, { Component } from 'react';

import Classes from './Layout.css';
import Aux from '../../hoc/Auxw/Auxw';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler =() => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={ this.state.showSideDrawer }
                    closed={ this.sideDrawerClosedHandler }
                />
                <div> Toolbar, SideDrawer, BackDrop </div>
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;