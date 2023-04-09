import NavBar from "./NavBar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
const Account = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Account'
    }, []);


    const NavElements = [{id:2,name:"Home" ,link:"/"}]

    const [accountInfo, setAccountInfo] = useState(null)
    const [error, setError] = useState(null)

    const fetchAccount = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/account/info`, { 
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`
            }
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else{
                throw Error('Something went worng!')
            }
        })
        .then(data => setAccountInfo(data))
        .catch(err=> setError('Something went worng!'))
    }
    useEffect(()=>{
        fetchAccount()
    },[])

    const history = useHistory()
    const handleClick = () => {
        history.push('/account-info-form')
    }

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="account">
                <div className="page-content">
                    <div className="box">
                        <h1>Account Data</h1>
                        <div className="content-box">
                            {accountInfo && (
                                <div className="form-content">
                                    <div className="side">
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>User ID:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{accountInfo.user_id}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>First Name:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{accountInfo.first_name}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Mid Name:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{accountInfo.mid_name}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Last Name:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{accountInfo.last_name}</h2>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="side">
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Date of birth:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{accountInfo.date_of_birth.split('T')[0]}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Role:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{accountInfo.role}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Email:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{accountInfo.email}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Address:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{accountInfo.address}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {error && (<div className="error">
                                <h2>{error}</h2>
                            </div>)}
                        </div>
                        <div className="button-wrap">
                            <button className="submit-button" onClick={handleClick}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>  
        
     );
}
 
export default Account;