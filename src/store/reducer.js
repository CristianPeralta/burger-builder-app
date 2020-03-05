import { ADD_INGREDIENT, REMOVE_INGREDIENT } from './actions';

const initialState = {
    ingredients: null,
    price: 4
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                }
            }
    
        default:
            break;
    }
};

export default reducer;