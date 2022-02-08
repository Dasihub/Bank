import React from "react";
import axios from "axios";
import Router from "./Router";
import Navbar from "./component/Navbar";
import {Context} from "./config/Context";

function App() {
    const [token, setToken] = React.useState(null)
    const [loader, setLoader] = React.useState(true)

    const checkToken = async () => {
        try {
            const res = await axios.get('/api/check')
            setLoader(pre => pre = false)
            setToken(res.data.token)
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        checkToken()
    }, [])

    if (loader) {
        return (
            <div className="container_loader">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Context.Provider value={{setToken}}>
            {
                token &&
                <Navbar/>
            }
            <Router
                isAuth={token}
            />
        </Context.Provider>
    )
}

export default App