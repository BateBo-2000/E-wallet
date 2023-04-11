import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";

const InputDataForm = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'Update Information'; 
    }, []);

    const history = useHistory()
    const location = useLocation();
    const accountInfo = location.state?.accountInfo;
    
    const [error, setError] = useState()

    const [firstName, setFirstName] = useState(accountInfo?.first_name)
    const [midName, setMidName] = useState(accountInfo?.mid_name)
    const [lastName, setLastName] = useState(accountInfo?.last_name)
    const [address, setAdress] = useState(accountInfo?.address)
    const [email, setEmail] = useState (accountInfo?.email)

    const NavElements = [
        {id:2,name:"Back" ,link:"/account"}
    ]

    const fetchPatchAccount = (data) =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/account/info`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (!res.ok) {
                if (res.status === 400) {
                    return res.json();
                }else{
                    throw new Error(`HTTP error! status: ${res.status}`);
                }    
            }
            return res.json();
        })
        .then(data => {
            if(data?.message === "SUCCESS"){
                //if the payment is successfull
                history.push("/account")
            }else{
                setError(data ? data : 'Something went worng!')
            }
        })
        .catch(err=> setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const handleClick = (e) => {
        e.preventDefault()
        //checking to send just the changed data
        let newData ={}
        if(firstName !== accountInfo?.first_name) newData.first_name = firstName
        if(midName !== accountInfo?.mid_name) newData.mid_name = midName
        if(lastName !== accountInfo?.last_name) newData.last_name = lastName
        if(address !== accountInfo?.address) newData.address = address
        if(email !== accountInfo?.email) newData.email = email
        fetchPatchAccount(newData)
    }

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="account-info-form">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Make changes</h2>
                        </div>
                        <form className="form">
                            <div className="form-content">
                                <div className="side">
                                    <div className="form-pair">
                                        <label>First name</label>
                                        <input type="text" value={firstName} required onChange={(e)=> {setFirstName(e.target.value)}} />
                                    </div>
                                    <div className="form-pair">
                                        <label>Middle name</label>
                                        <label htmlFor="midleN"></label>
                                        <input type="text" name="midleN" value={midName} required onChange={(e)=> {setMidName(e.target.value)}} />
                                    </div>
                                    <div className="form-pair">
                                        <label>Last name</label>
                                        <input type="text" value={lastName} required onChange={(e)=> {setLastName(e.target.value)}} />
                                    </div>

                                </div>
                                <div className="side">
                                    <div className="form-pair">
                                        <label>Address</label>
                                        <input type="text" value={address} required onChange={(e)=> {setAdress(e.target.value)}} />
                                    </div>
                                    <div className="form-pair">
                                        <label>Email</label>
                                        <input type="email" value={email} required onChange={(e)=> {setEmail(e.target.value)}} />
                                    </div>
                                </div>   
                            </div> 
                            <div className="button-wrap">
                                <button className="submit-button" onClick={handleClick}>Submit</button>
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
 
export default InputDataForm