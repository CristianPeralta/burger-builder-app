import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];
    for (const ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            mount: props.ingredients[ingredientName],
        });
    }

    const ingredientsOutput = ingredients.map(ig => {
    return <span key={ig.name}> {ig.name} ({ig.mount}) </span>;
    });
    return (
        <div className={classes.Order}>
            <p> Ingredients: {ingredientsOutput} </p>
    <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;