import {
    PURCHASE_INIT,
    PURCHASE_BURGER_START,
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_BURGER_FAIL,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAIL,
} from '../actions/actionsTypes';

import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE_INIT:
            return updateObject(state, { purchased: false });
        case PURCHASE_BURGER_START:
            return updateObject(state, { loading: true });
        case PURCHASE_BURGER_SUCCESS:
            const newOrder = updateObject(action.orderData, { id: action.orderId });
            return updateObject(state, {
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder),
            });
        case PURCHASE_BURGER_FAIL:
            return updateObject(state, { loading: false });
        case FETCH_ORDERS_START:
            return updateObject(state, { loading: true });
        case FETCH_ORDERS_SUCCESS:
            return updateObject(state, { orders: action.orders, loading: false });
        case FETCH_ORDERS_FAIL:
            return updateObject(state, { loading: false });
        default: return state;
    }
};

export default reducer;