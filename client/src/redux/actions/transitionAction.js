import axios from "axios";
import {TRANSITION, TRANSITION_LOADER_FALSE, TRANSITION_LOADER_TRUE} from "../types/types";

const transitionAction = (transition) => async dispatch => {
    try {
        dispatch({type: TRANSITION_LOADER_TRUE})
        const res = await axios.post('/api/transition', {transition})
        dispatch({type: TRANSITION, payload: res})
        dispatch({type: TRANSITION_LOADER_FALSE})
    } catch (e) {
        console.log(e)
    }
}