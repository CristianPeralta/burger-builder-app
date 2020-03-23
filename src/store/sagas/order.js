import axios from '../../axios-orders';

import { put } from 'redux-saga/effects';

import { purchaseBurgerStart, purchaseBurgerSuccess, purchaseBurgerFail } from '../actions/index';

export function* purchaseBurgerSaga(action) {
    try {
        yield put(purchaseBurgerStart());
        const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData)
        yield put(purchaseBurgerSuccess(response.data.name, action.orderData));
    } catch (error) {
        yield put(purchaseBurgerFail(error));
    }
}