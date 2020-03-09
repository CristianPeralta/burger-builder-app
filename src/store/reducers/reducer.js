import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../actions/actionsTypes';

const initialState = {
    ingredients: {
        salad: 0,
        meat: 0,
        cheese: 0,
        bacon: 0
    },
    price: 4
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