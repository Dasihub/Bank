import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import Register from "../component/Register";

function RegisterPages() {
    const [form, setForm] = React.useState({
        login: '',
        password: ''
    })

    const navigate = useNavigate()

    const register = async () => {
        try {
            if (form.login && form.password) {
                const res = await axios.post('/api/register', {login: form.login.trim(), password: form.password.trim()})
                navigate('/login')
                window.alert(res.data.message)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Register form={form} setForm={setForm} register={register}/>
        </>
    )
}

export default RegisterPages