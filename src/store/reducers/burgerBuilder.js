import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED } from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    price: 4,
    error: false,
};

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.8,
    meat: 1.2,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            const updatedIngredients = updateObject(state.ingredients, {
                [action.ingredientName] : state.ingredients[action.ingredientName] + 1
            });
            const updatedState = {
                ingredients: updatedIngredients,
                price: state.price + INGREDIENT_PRICE[action.ingredientName],
            };
            return updateObject(state, updatedState);
        case REMOVE_INGREDIENT:
            const updatedIngs = updateObject(state.ingredients, {
                [action.ingredientName] : state.ingredients[action.ingredientName] - 1
            });
            const updatedSt = {
                ingredients: updatedIngs,
                price: state.price + INGREDIENT_PRICE[action.ingredientName],
            };
            return updateObject(state, updatedSt);
        case SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                price: 4,
                error: false,
            });
        case FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {
                error: true,
            });
        default: return state;
    }
};

export default reducer;