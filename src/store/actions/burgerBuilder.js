import { ADD_INGREDIENT, REMOVE_INGREDIENT, FETCH_INGREDIENTS_FAILED, SET_INGREDIENTS, INIT_INGREDIENTS } from './actionsTypes';

export const addIngredient = (name) => {
    return {
        type: ADD_INGREDIENT,
        ingredientName: name,
    };
};

export const removeIngredient = (name) => {
    return {
        type: REMOVE_INGREDIENT,
        ingredientName: name,
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: SET_INGREDIENTS,
        ingredients: ingredients,
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: FETCH_INGREDIENTS_FAILED,
    };
};

export const initIngredients = () => {
    return {
        type: INIT_INGREDIENTS,
    };
};