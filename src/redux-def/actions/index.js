import {SET_GALLERY, NON_LANDING} from "../constants/action-types";

export const change_page = page => ({ type: NON_LANDING, payload: page });
export const set_gallery = gallery_component => ({ type: SET_GALLERY, payload: gallery_component});
