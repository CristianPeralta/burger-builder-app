import { takeEvery } from 'redux-saga/effects';
import { AUTH_INITIATE_LOGOUT, AUTH_CHECK_TIMEOUT, AUTH_CHECK_STATE, AUTH_USER, INIT_INGREDIENTS } from '../actions/actionsTypes';
import { authUserSaga, logoutSaga, checkAuthTimeoutSaga, authCheckStateSaga } from './auth';
import { initIngredientsSaga } from './burgerBuilder';

export function* watchAuth() {
    yield takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(AUTH_USER, authUserSaga);
    yield takeEvery(AUTH_CHECK_STATE, authCheckStateSaga);
}

export function* watchBurgerBuilder() {
    yield takeEvery(INIT_INGREDIENTS, initIngredientsSaga);
}