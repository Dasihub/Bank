import React from "react";
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom";

function Register({setForm, form, register}) {

    const change = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Регистрация</h1>
                <div className="card pink darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Создайте аккаунт</span>
                        <div>
                            <div className="input-field">
                                <p>Введите login</p>
                                <input
                                    id="email"
                                    type="email"
                                    className="yellow-input white-text"
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
                                    className="yellow-input white-text"
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
                            onClick={register}
                        >Создать аккаунт
                        </button>
                        <NavLink to="/login">
                            <button
                                className="btn grey lighten-1 black-text"
                            >Авторизация
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {
    setForm: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired
}

export default Register