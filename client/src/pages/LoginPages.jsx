import React from "react";
import axios from "axios";
import {Context} from "../config/Context";
import Login from "../component/Login";
import {basesUrl} from "../config/data";

function LoginPages() {
    const [form, setForm] = React.useState({
        login: '',
        password: ''
    })

    const {setToken} = React.useContext(Context)

    const login = async () => {
        try {
            if (form.login && form.password) {
                const res = await axios.post(basesUrl + '/api/login', {login: form.login.trim(), password: form.password.trim()})
                window.alert(res.data.message)
                setToken(res.data.token)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Login form={form} setForm={setForm} login={login}/>
        </>
    )
}

export default LoginPages