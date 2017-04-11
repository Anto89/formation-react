import { FETCH_URLS } from '../actions/urls';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_URLS: return action.urls;

        default: return state;
    }
};