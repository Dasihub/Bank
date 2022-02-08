import {combineReducers} from "redux";
import {transitionReducer} from "./reducers/transitionReducer";

export const rootReducer = combineReducers({
    transitionReducer
})