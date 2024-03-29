import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";
const CreateBalance = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Create Balance'
    }, []);

    const NavElements = [
        {id:1,name:"Back" ,link:"/"},
    ]

    const history = useHistory()
    const [error, setError]= useState(null)
    const [currencyStr, setCurrency] = useState('')

    const validate = (str) => {
        if(str.length !== 3) return setError('Currecny must be 3 symbols')
        return true
    }

    const fetchCreateBalance = (curString) => {

        fetch(`${process.env.REACT_APP_BASE_URL}/balance/create`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currency: curString
            })
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
                history.push('/')
            }else{
                if(data?.message) {
                    setError(data.message)
                }else{
                    setError('Something went worng!')
                }
                
            }
        })
        .catch(err => {
            console.error(err);
        });
    }

    const handleSubmit = () => {
        if(validate(currencyStr))
        fetchCreateBalance(currencyStr)
    }

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="transaction">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Create New Balance</h2>
                        </div>
                        <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>Currency</label>
                                    <input type="text"  value={currencyStr} required onChange={(e)=> {setCurrency(e.target.value)}} />
                                </div>
                            </form>
                        </div>
                        <div className="button-wrap">
                            <button className="submit-button" onClick={handleSubmit}>Create</button>
                        </div>
                        {error && (<div className="error">
                            <h2>{error}</h2>
                        </div>)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default CreateBalance;