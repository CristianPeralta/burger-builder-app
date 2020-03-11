import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
} from './/../actions/actionsTypes';

import { updateObject } from  '../utility.js';
import { act } from 'react-dom/test-utils';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
};

const authStart = (state) => {
    return updateObject(state, { loading: true, error: null });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
    });
};

const authFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START: return authStart(state, action);
        case AUTH_SUCCESS: return authSuccess(state, action);
        case AUTH_FAIL: return authFail(state, action);
        default: return state;
    }
};

export default reducer;