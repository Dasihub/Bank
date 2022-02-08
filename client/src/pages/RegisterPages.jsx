import React from "react";
import Register from "../component/Register";

function RegisterPages() {
    const [form, setForm] = React.useState({
        login: '',
        password: ''
    })

    return (
        <>
            <Register form={form} setForm={setForm}/>
        </>
    )
}

export default RegisterPages