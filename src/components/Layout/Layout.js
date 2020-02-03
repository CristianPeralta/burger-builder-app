import React from 'react';

import Classes from './Layout.css';
import Aux from '../../hoc/Aux';

const layout = ( props ) => (
    <Aux>
        <div> Toolbar, SideDrawer, BackDrop </div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;