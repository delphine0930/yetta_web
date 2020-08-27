import { FETCH_BLOG } from "../actions/types";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_BLOG:
            return [...state, action.payload];
     
        default:
            return state;
    }
}