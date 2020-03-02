import React from 'react';
import classes from './Order.css';

const order = (props) => {
    console.log(props);
    return (
        <div className={classes.Order}>
            <p>Ingredients: Meat (1)</p>
            <p>Price: <strong>USD 4.2</strong></p>
        </div>
    );
};

export default order;