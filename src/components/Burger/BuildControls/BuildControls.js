import React from 'react';

import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {
            controls.map(control => {
                return (
                    <BuildControl
                        key={control.label}
                        label={control.label}
                        added={() => props.ingredientAdded(control.type)}
                        removed={() => props.ingredientRemoved(control.type)}
                    />)
            })
        }
    </div>
);

export default buildControls;