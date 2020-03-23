import axios from 'axios';

import { put, delay, call } from 'redux-saga/effects';

import { authStart, authSuccess, authFail, checkAuthTimeout, logout, logoutSucced } from '../actions/index';

export function* logoutSaga(action) {
    yield call([localStorage, 'removeItem'], 'token');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield call([localStorage, 'removeItem'], 'userId');
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
        yield put(authSuccess(response.data.idToken, response.data.localId));
        yield put(checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(authFail());
    }
}

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            put(logout());
        } else {
            const userId = yield localStorage.getItem('userId');
            yield put(authSuccess(token, userId));
            yield put(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()))/1000);
        }
    }
}