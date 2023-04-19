import { useHistory } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
const SignInForm = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Sign in'; 
    }, []);

    const history = useHistory();
    const [error, setError] = useState()
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const [pass2,setPass2] = useState('')

    const handleRegister = (e) => {
        //dont reset the page
        e.preventDefault();

        //validate passwords
        if(pass !== pass2) return setError('Passwords dont match!')
        if(user.length<4 || user.length>40) return setError('Username must be 4 to 40 symbols')
        if(pass.length<4 || pass.length>40) return setError('Password must be 4 to 40 symbols')

        sessionStorage.setItem('username',user)
        sessionStorage.setItem('password',pass)

        history.push('/account-info-form')
    }
    return ( 
        <div>
            <NavBar/>
            <div className="sign-in">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h1>Register</h1>
                        </div>
                        <form className="form">
                            <div className="form-pair">
                                <label>Username</label>
                                <input type="text"  value={user} required onChange={(e)=> {setUser(e.target.value)}}  />
                            </div>
                            <div className="form-pair">
                                <label>Password</label>
                                <input type="password" value={pass} required onChange={(e)=> {setPass(e.target.value)}}  />
                            </div>
                            <div className="form-pair">
                                <label>Confirm Password</label>
                                <input type="password" value={pass2} required onChange={(e)=> {setPass2(e.target.value)}}  />
                            </div>
                            <div className="button-wrap">
                                <button className="submit-button" onClick={handleRegister}>Next</button>
                            </div>
                            <div className="link">
                                <Link to="/login">Login</Link>
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
 
export default SignInForm;