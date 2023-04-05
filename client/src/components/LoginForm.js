
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import React from 'react'
import {tokenHandler} from '../common/ResponseHandler'

const LoginForm = () => {
    React.useEffect(() => { /*set the window title */
        document.title = 'E-wallet Login'; 
    }, []);

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)



    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        login(user, pass);
    };

    const login = (username, password) => {
        fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => tokenHandler (res, setError))
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