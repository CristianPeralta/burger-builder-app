import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../actions/actionsTypes';

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
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                price: state.price + INGREDIENT_PRICE[action.ingredientName],
            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                },
                price: state.price - INGREDIENT_PRICE[action.ingredientName],
            }
        default: return state;
    }
};

export default reducer;