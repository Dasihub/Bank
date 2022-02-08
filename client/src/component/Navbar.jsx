import React from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {Context} from "../config/Context";

function Navbar() {

    const {setToken} = React.useContext(Context)

    const logout = async () => {
        try {
            const res = await axios.get('/api/logout')
            setToken(null)
            window.alert(res.data.message)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <p className="brand-logo">Logo</p>
                <div className="link_container">
                    <NavLink to="/watch"><div>Просмотр транзакции</div></NavLink>
                    <NavLink to="/add"><div>Добавить транзакции</div></NavLink>
                    <div onClick={logout}>Выйти</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar