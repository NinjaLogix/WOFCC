import {NON_LANDING} from "../constants/action-types";

const initialState = {
    page: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NON_LANDING:
            return {...state, page: action.payload};
        default:
            return state;
    }
};

export default rootReducer;