import React, { Component } from 'react';

import Classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Toolbar/>
                <SideDrawer />
                <div> Toolbar, SideDrawer, BackDrop </div>
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;