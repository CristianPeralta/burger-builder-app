import { takeEvery } from 'redux-saga/effects';
import { AUTH_INITIATE_LOGOUT } from '../actions/actionsTypes';
import { logoutSaga } from './auth';

export function* watchAuth() {
    yield takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga);
}