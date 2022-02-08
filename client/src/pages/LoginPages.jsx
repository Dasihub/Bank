import React from "react";
import Login from "../component/Login";

function LoginPages() {
    const [form, setForm] = React.useState({
        login: '',
        password: ''
    })

    return (
        <>
            <Login form={form} setForm={setForm}/>
        </>
    )
}

export default LoginPages