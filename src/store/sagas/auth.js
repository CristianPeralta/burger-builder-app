import axios from 'axios';

import { put, delay } from 'redux-saga/effects';

import { authStart, authSuccess, authFail, checkAuthTimeout, logout, logoutSucced } from '../actions/index';

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(logoutSucced());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(logout());
}

export function* authUserSaga(action) {
    yield put(authStart());
    try {
        const authData = {
            email: action.email,
            password: action.password,
            returnSecureToken: true,
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]';
        if (!action.isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]';
        }
        const response = yield axios.post(url, authData);
        const expirationDate = yield new Date(new Date() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);
        put(authSuccess(response.data.idToken, response.data.localId));
        put(checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(authFail());
    }
}