import {SET_GALLERY, NON_LANDING} from "../constants/action-types";

const initialState = {
    page: '',
    gallery_context: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NON_LANDING:
            return {...state, page: action.payload};
        case SET_GALLERY:
            return {...state, gallery_context: action.payload};
        default:
            return state;
    }
};

export default rootReducer;
