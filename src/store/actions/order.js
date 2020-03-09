import { PURCHASE_BURGER_SUCCESS } from './actionsTypes';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    };
};