import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import {LoginPages, RegisterPages, TransitionAddPages, TransitionWatchPages} from "./pages";

const Router = ({isAuth}) => {
    if (isAuth) {
        return (
            <Routes>
            <Route path="/watch" element={<TransitionWatchPages/>}/>
            <Route path="/add" element={<TransitionAddPages/>}/>
            <Route path="/register" element={<Navigate replace to="/add"/>}/>
            <Route path="/login" element={<Navigate replace to="/add"/>}/>
            <Route path="/" element={<Navigate replace to="/add"/>}/>
        </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/watch" element={<Navigate replace to="/login"/>}/>
            <Route path="/add" element={<Navigate replace to="/login"/>}/>
            <Route path="/register" element={<RegisterPages/>}/>
            <Route path="/login" element={<LoginPages/>}/>
            <Route path="/" element={<Navigate replace to="/login"/>}/>
        </Routes>
    )
}

export default Router