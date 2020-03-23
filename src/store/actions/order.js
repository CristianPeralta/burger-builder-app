import {
    PURCHASE_BURGER,
    PURCHASE_INIT,
    PURCHASE_BURGER_START,
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_BURGER_FAIL,
    FETCH_ORDERS,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAIL,
} from './actionsTypes';

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

export const purchaseBurgerStart = () => {
    return {
        type: PURCHASE_BURGER_START,
    };
};

export const purchaseInit = () => {
    return {
        type: PURCHASE_INIT,
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        orders: orders,
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: FETCH_ORDERS_FAIL,
        error: error,
    };
};

export const fetchOrderStart = () => {
    return {
        type: FETCH_ORDERS_START,
    };
};

export const fetchOrders = (token, userId) => {
    return {
        type: FETCH_ORDERS,
        token: token,
        userId: userId,
    };
};

export const purchaseBurger = (orderData, token) => {
    return {
        type: PURCHASE_BURGER,
        token: token,
        orderData: orderData,
    };
};