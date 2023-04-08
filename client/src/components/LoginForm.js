
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import React from 'react'
import {tokenHandler, statusChecker} from '../common/ResponseHandler'
import { useAuth } from "../utils/auth";

const LoginForm = () => {
    React.useEffect(() => { /*set the window title */
        document.title = 'E-wallet Login'; 
    }, []);

    const auth = useAuth()
    const history = useHistory()
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)



    const handleLogin = (e) => {
        e.preventDefault();
        setError(null);

        login(user, pass);
    };

    const login = (username, password) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => {
            if(statusChecker(res, setError)){
                return res.json()
            }
            throw new Error(`HTTP error! status: ${res.status}`); // stops the promise cahin and goes directly to the catch block
        })
        .then(data=>{
            if(tokenHandler(data, setError)){
                auth.Login()        //sets the cotext
                history.push('/')   //If everything is ok up to here, redirects to home
            }
            throw Error(error) //throws error if there is problem in the token handler
        })
        .catch(err => setError('Something went wrong!'));
    }

    return ( 
        <div>
            <NavBar/>
            <div className="login">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h1>Login</h1>
                        </div>
                        <form className="form">
                            <div className="form-pair">
                                <label>Username</label>
                                <input type="text" value={user} required onChange={(e)=> {setUser(e.target.value)}} />
                            </div>
                            <div className="form-pair">
                                <label>Password</label>
                                <input type="password" value={pass} required onChange={(e)=> {setPass(e.target.value)}} />
                            </div>
                            <div className="button-wrap">
                                <button className="submit-button" onClick={handleLogin}>Login</button>
                            </div>
                            <div className="link">
                                <Link to="/sign-in">Register</Link>
                            </div>
                            {error && (<div className="error">
                                <h2>{error}</h2>
                            </div>)}
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
     );
}
 
export default LoginForm;