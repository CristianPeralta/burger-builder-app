import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_CHECK_TIMEOUT,
    AUTH_CHECK_STATE,
    AUTH_INITIATE_LOGOUT,
    AUTH_LOGOUT,
    AUTH_USER,
    SET_AUTH_REDIRECT_PATH,
} from './actionsTypes';

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

export const logout = () => {
    /* localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId'); */
    return {
        type: AUTH_INITIATE_LOGOUT,
    };
};

export const logoutSucced = () => {
    return {
        type: AUTH_LOGOUT,
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return {
        type: AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime,
    };
};

export const auth = (email, password, isSignUp) => {
    return {
        type: AUTH_USER,
        email: email,
        password: password,
        isSignUp: isSignUp,
    };
};

export const setAuthRedirectPath = path => {
    return {
        type: SET_AUTH_REDIRECT_PATH,
        path: path,
    };
};

export const authCheckState = () => {
    return {
        type: AUTH_CHECK_STATE,
    };
};