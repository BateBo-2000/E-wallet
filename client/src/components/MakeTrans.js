import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MakeTrans = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Transaction'
    }, []);
    const location = useLocation()
    const balance = location.state?.balance

    const history = useHistory()
    const [error, setError]= useState(null)
    const [amount, setAmount] = useState(0)
    const [recieverID, setRecieverID] = useState(0)

    const NavElements = [
        {id:1,name:"Back" ,link:{ pathname: `/balance/id=${balance.balance_id}`, state:  {balance}}},
    ]

    const fetchMakeTransaction = (reciever_id, sender_id, amount, currency_name) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/transactions/make`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "reciever_id":reciever_id,
                "sender_balance_id":sender_id,
                "amount":amount,
                "currency":currency_name
            })
        })
        .then(res => {          /** here the res is checked if it is technically alright  (like if the server has answered) */
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
                history.push({ pathname: `/balance/id=${balance.balance_id}`, state:  {balance}})
            }else{
                if(data?.message) {
                    setError(data.message)
                }else{
                    setError('Something went worng!')
                }
            }
        })
        .catch(err => setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const handleTransaction = () =>{
        fetchMakeTransaction(recieverID, balance.balance_id, amount, balance.currency_name)
    }

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="transaction">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Make Transaction</h2>
                        </div>
                        <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>Reciever ID</label>
                                    <input type="Number" value={recieverID} onChange={(e)=>setRecieverID(e.target.value)}/>
                                </div>
                                <div className="form-pair">
                                    <label>Amount in {balance.currency_name}</label>
                                    <input type="Number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <div className="button-wrap">
                            <button className="submit-button" onClick={handleTransaction}>Make Transaction</button>
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
        </div>
     );
}
 
export default MakeTrans;