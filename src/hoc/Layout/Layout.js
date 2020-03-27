import React, { useState } from 'react';

import { connect } from 'react-redux';

import Classes from './Layout.css';
import Aux from '../Auxw/Auxw';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }
    const sideDrawerToggleHandler =() => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }
    return (
        <Aux>
            <Toolbar 
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer 
                isAuth={props.isAuthenticated}
                open={ sideDrawerIsVisible }
                closed={ sideDrawerClosedHandler }
            />
            <div> Toolbar, SideDrawer, BackDrop </div>
            <main className={Classes.Content}>
                {props.children}
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