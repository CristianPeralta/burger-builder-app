import React from 'react';

import Classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
    <Aux>
        <Toolbar/>
        <SideDrawer />
        <div> Toolbar, SideDrawer, BackDrop </div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;