import React from 'react';

import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return console.log(ingKey);
        })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bot"/>
        </div>
    );
};

export default burger;