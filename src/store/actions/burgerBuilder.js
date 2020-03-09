import { ADD_INGREDIENT } from './actionsTypes';

export const addIngredient = (name) => {
    return {
        type: ADD_INGREDIENT,
        ingredientName: name,
    };
};


export const removeIngredient = (name) => {
    return {
        type: ADD_INGREDIENT,
        ingredientName: name,
    };
};