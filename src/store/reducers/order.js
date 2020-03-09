import { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL  } from '../actions/actionsTypes';

const initialState = {
    orders: [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE_BURGER_SUCCESS:
            return {
                ...state,
            };
        case PURCHASE_BURGER_FAIL:
            return {
                ...state,
            };
        default: return state;
    }
};

export default reducer;