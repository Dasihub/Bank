import {TRANSITION, TRANSITION_LOADER_FALSE, TRANSITION_LOADER_TRUE} from "../types/types";

const initialState = {
    transitions: [],
    loader: false
}

export const transitionReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSITION_LOADER_TRUE:
            return {...state, loader: true}
        case TRANSITION:
            return {...state, transitions: action.payload}
        case TRANSITION_LOADER_FALSE:
            return {...state, loader: false}
        default:
            return state
    }
}