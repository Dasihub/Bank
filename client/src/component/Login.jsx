import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

function Login({setForm, form, login}) {

    const change = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Авторизация</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Пройдите авторизацию</span>
                        <div>
                            <div className="input-field">
                                <p>Введите login</p>
                                <input
                                    id="email"
                                    type="email"
                                    className="yellow-input"
                                    name="login"
                                    onChange={change}
                                    value={form.login}
                                />
                            </div>
                            <div className="input-field">
                                <p>Введите пароль</p>
                                <input
                                    id="password"
                                    type="password"
                                    className="yellow-input"
                                    name="password"
                                    onChange={change}
                                    value={form.password}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{marginRight: '10px'}}
                            onClick={login}
                        >Войти
                        </button>
                        <NavLink to="/register">
                            <button
                                className="btn grey lighten-1 black-text"
                            >Регистрация
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    setForm: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired
}

export default Login