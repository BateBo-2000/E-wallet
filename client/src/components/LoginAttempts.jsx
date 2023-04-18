import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
const LoginAttempts = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Login Attempts'; 
    }, []);

    const NavElements = [{id:2,name:"Back" ,link:"/account"}]
    const [error, setError] = useState(null)
    const [attempts, setAttempts] = useState(null)

    const fetchAttempts = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/account/login_info`, { 
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
            }
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else{
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
        .then(data => setAttempts(data))
        .catch(err=> setError(err?.message ? err?.message :'Something went worng!'))
    }


    useEffect(()=> {
        fetchAttempts()
    },[])

    return ( <div>
        <NavBar elements={NavElements}/>
        <div className="login-attempts">
            <div className="page-content">
                <div className="box">
                    <div className="title">
                        <h2>Login Attempts</h2>
                    </div>
                    <div className="error">
                        <h2>If you find any unusual logins, please contact us immediately!</h2>
                    </div>
                    {attempts && attempts.map((attempt) => (
                        <div className="tran" key={attempt.account_logins_id}>
                            <div className="content-box">
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Status:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{attempt.login_try}</h2>
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Time:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{attempt.login_timestamp.split('T')[0]} Time: {attempt.login_timestamp.split('T')[1].split('.')[0]} GMT</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!attempts && !error && (
                        <div className="title">
                            <h2>Loading...</h2>
                        </div>
                    )}
                    {error && 
                        <div className="error">
                            <h2>{error}</h2>
                        </div> 
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </div> );
}
 
export default LoginAttempts;