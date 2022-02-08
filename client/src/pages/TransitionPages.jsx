import React from "react";
import axios from "axios";
import TransitionAdd from "../component/TransitionAdd";

function TransitionPages() {
    const [disableBtn, setDisableBtn] = React.useState(false)
    const [transition, setTransition] = React.useState('')

    const handleTransition = async (transition) => {
        try {
            setTransition(pre => pre = '')
            setDisableBtn(pre => pre = true)
            const res = await axios.post('/api/transition', {amount: transition.trim()})
            setDisableBtn(false)
            window.alert(res.data.message)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <TransitionAdd
                transition={transition}
                disableBtn={disableBtn}
                setTransition={setTransition}
                handleTransition={handleTransition}
            />
        </>
    )
}

export default TransitionPages