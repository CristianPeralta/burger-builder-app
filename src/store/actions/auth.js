import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
} from './actionsTypes';

import axios from 'axios';

export const authStart = () => {
    return {
        type: AUTH_START,
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: AUTH_SUCCESS,
        idToken: token,
        userId: userId,
    };
};

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        error: error,
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        dispatch(authStart());
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[APIKEY]';
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error));
            });
    };
};