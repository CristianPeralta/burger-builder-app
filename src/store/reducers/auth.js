import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
} from './/../actions/actionsTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case AUTH_START: return;
        case AUTH_SUCCESS: return;
        case AUTH_FAIL: return;
        default: return state;
    }
};

export default reducer;