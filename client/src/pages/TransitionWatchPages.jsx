import React from "react";
import {useDispatch, useSelector} from "react-redux";
import TransitionWatch from "../component/TransitionWatch";
import {transitionAction} from "../redux/actions/transitionAction";
import axios from "axios";

function TransitionWatchPages() {
    const dispatch = useDispatch()

    const {transitions, loader} = useSelector(state => state.transitionReducer)

    React.useEffect(() => {
        dispatch(transitionAction())
    }, [])

    const deleteTransitions = async (id) => {
        try {
            const res = await axios.delete('/api/transition', {id})
            dispatch(transitionAction())
            window.alert(res.data.message)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <TransitionWatch loader={loader} transitions={transitions} deleteTransitions={deleteTransitions}/>
        </>
    )
}

export default TransitionWatchPages