import axios from "axios";
import {TRANSITION, TRANSITION_LOADER_FALSE, TRANSITION_LOADER_TRUE} from "../types/types";

export const transitionAction = () => async dispatch => {
    try {
        dispatch({type: TRANSITION_LOADER_TRUE})
        const res = await axios.get('/api/transition')
        console.log(res.data, 'res')
        dispatch({type: TRANSITION, payload: res.data})
        dispatch({type: TRANSITION_LOADER_FALSE})
    } catch (e) {
        console.log(e)
    }
}