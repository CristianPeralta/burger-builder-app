import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.8,
    meat: 1.2,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0,
        },
        purchasable: false,
        purchasing: false,
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        } 
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const oldPrice = this.state.totalPrice;
        const priceDeduction = INGREDIENT_PRICE[type];
        const newPrice = oldPrice - priceDeduction;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, item) => sum + item, 0);

        this.setState({ purchasable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('Continue!');
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        ></OrderSummary>
                </Modal>
                <Burger 
                    ingredients={this.state.ingredients}
                />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;