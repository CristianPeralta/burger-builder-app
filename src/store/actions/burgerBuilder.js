import axios from '../../axios-orders';
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from './actionsTypes';

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

export const initIngredients = () => {
    axios.get('https://react-my-burger-eb284.firebaseio.com/ingredients.json')
    .then(response => {
        // SET INGREDIENTS
    })
    .catch(error=>{
        // SET INGREDIENTS
    });
};