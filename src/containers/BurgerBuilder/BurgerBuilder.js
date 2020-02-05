import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.8,
    mear: 1.2,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0,
        },
        totalPrice: 4,
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const oldPrice = this.state.totalPrice;
        const additionalPrice = INGREDIENT_PRICE[type];
        const newPrice = oldPrice + additionalPrice;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const oldPrice = this.state.totalPrice;
        const priceDeduction = INGREDIENT_PRICE[type];
        const newPrice = oldPrice - priceDeduction;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    }

    render() {
        return (
            <Aux>
                <Burger 
                    ingredients={this.state.ingredients}
                />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;