import NavBar from "../NavBar";
import Footer from "../Footer";
import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
const EditBalance = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'Change Balance'
    }, []);

    const location = useLocation()
    const balance = location.state?.balance
    const history = useHistory()

    const NavElements = [
        {id:1,name:"Back" ,link:"/update-balance" },
    ]

    const [error, setError] = useState(null)
    const [amount, setAmount] = useState(0)

    const fetchChangeBalance = (balance_id, amount) =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/admin/changeBalance`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "balance_id":balance_id,
                "amount":amount
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
            if(data?.message){
                setError(data.message)
                history.push('/update-balance')
            }else{
                setError(data ? data : 'Something wen wrong')
            }   
        })
        .catch(err => {
            setError(err.message ? err.message : 'something went wrong')
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        fetchChangeBalance(balance.balance_id, amount)
    }

    return (<div>
        <NavBar elements={NavElements}/>
        <div className="transaction">  
            <div className="page-content">
                <div className="box">
                    <div className="title">
                        <h2>Search Users</h2>
                    </div>
                    <div className="error">
                        <h2>By clicking change you will overwrite the amount of money in the balance</h2>
                    </div>
                    <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>New Amount in {balance.currency_name}</label>
                                    <input type="Number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                    <div className="button-wrap">
                        <button className="submit-button" onClick={e=>handleSubmit(e)}>Change</button>
                    </div>
                    {error && 
                        <div className="error">
                            <h2>{error}</h2>
                        </div> 
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </div>);
}
 
export default EditBalance;