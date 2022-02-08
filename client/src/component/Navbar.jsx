import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <p className="brand-logo">Logo</p>
                <div className="link_container">
                    <NavLink to="/watch"><div>Просмотр транзакции</div></NavLink>
                    <NavLink to="/add"><div>Добавить транзакции</div></NavLink>
                    <div>Выйти</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar