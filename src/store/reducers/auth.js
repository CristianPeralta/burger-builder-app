import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
} from './/../actions/actionsTypes';
import { initIngredients } from '../actions';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START: return;
        case AUTH_SUCCESS: return;
        case AUTH_FAIL: return;
        default: return state;
    }
};

export default reducer;