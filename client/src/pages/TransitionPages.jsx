import React from "react";
import TransitionAdd from "../component/TransitionAdd";
import {useDispatch} from "react-redux";

function TransitionPages() {

    const dispatch = useDispatch

    const handleTransition = (transition) => {
        if (transition) {
            dispatch()
        }
    }

    return (
        <>
            <TransitionAdd handleTransition={handleTransition}/>
        </>
    )
}

export default TransitionPages