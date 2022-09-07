import { type } from "@testing-library/user-event/dist/type";
import posts from '../post.json';

const initialState = {
    items: [],
};


export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                items: action.payload,
            };
        case 'REMOVE_POSTS':
            return {
                ...state,
            };

        default:
            return state;
    }
};