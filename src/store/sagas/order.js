import axios from '../../axios-orders';

import { put } from 'redux-saga/effects';

import { purchaseBurgerStart, purchaseBurgerSuccess, purchaseBurgerFail, fetchOrderStart, fetchOrdersSuccess, fetchOrdersFail  } from '../actions/index';

export function* purchaseBurgerSaga(action) {
    try {
        yield put(purchaseBurgerStart());
        const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData)
        yield put(purchaseBurgerSuccess(response.data.name, action.orderData));
    } catch (error) {
        yield put(purchaseBurgerFail(error));
    }
}

export function* fetchOrdersSaga(action) {
    yield put(fetchOrderStart());
    try {
        const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        const response = yield axios.get('/orders.json' + queryParams)
        const fetchOrders = [];
        for (const key in response.data) {
            fetchOrders.push({
                ...response.data[key],
                id: key,
            });
        }
        yield put(fetchOrdersSuccess(fetchOrders));
    } catch (error) {
        yield put(fetchOrdersFail(error));
    }
}