import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../../store/actions';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import Burger from '../../components/Burger/Burger';
import axios from '../../axios-orders';
import Aux from '../../hoc/Auxw/Auxw';

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.8,
    meat: 1.2,
};

class BurgerBuilder extends Component {
    state = {
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false,
    };

    componentDidMount() {
        /* axios.get('https://react-my-burger-eb284.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            })
            .catch(error=>{
                this.setState({ error: true });
            }); */
    }

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
        const queryParams = [];
        for (const i in this.props.ings) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]));
        }
        queryParams.push('price=' + this.props.price);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString,
        });
    }

    render() {

        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burger = this.state.error ? <p style={{textAlign: 'center'}}>Ingredients can't be loaded</p> : <Spinner />;
        let orderSummary = null;

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger 
                        ingredients={this.props.ings}
                    />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientsAdded}
                        ingredientRemoved={this.props.onIngredientsRemoved}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.props.price}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary 
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ></OrderSummary>;
        }



        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.price,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientsAdded: ingName => dispatch({ type: ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientsRemoved: ingName => dispatch({ type: REMOVE_INGREDIENT, ingredientName: ingName }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));