import axios from '../../axios-orders';
import { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL } from './actionsTypes';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: PURCHASE_BURGER_FAIL,
        error: error,
    };
};

export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.get('/orders.json')
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    };
};