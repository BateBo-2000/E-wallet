import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Withdraw = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Withdraw'
    }, []);

    const location = useLocation()
    const balance = location.state?.balance

    const history = useHistory()
    const [error, setError]= useState(null)
    const [amount, setAmount] = useState(0)

    if(!balance) setError('Something went worng')

    const fetchImportMoney = (amount, balance_id) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/payment/withdrawMoney`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "amount":amount,
                "balance_id":balance_id
            })
        })
        .then(res => {          /** here the res is checked if it is technically alright  (like if the server has answered) */
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            if(data?.message === "SUCCESS"){
                //if the payment is successfull
                history.push({ pathname: `/balance/id=${balance.balance_id}`, state:  {balance}})
            }else{
                setError(data.message ? data.message : 'Something went worng!')
            }
        })
        .catch(err=> setError(err?.message ? err?.meassge : "Something went wrong"))
    }
        
    const NavElements = [
        {id:1,name:"Back" ,link:{ pathname: `/balance/id=${balance.balance_id}`, state:  {balance}}},
    ]


    const handleWithdrawMoney = () =>{
        fetchImportMoney(amount, balance.balance_id)
    }

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="transaction">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Withdraw money from you wallet</h2>
                        </div>
                        <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>Amount in {balance.currency_name}</label>
                                    <input type="Number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <div className="button-wrap">
                            <button className="submit-button" onClick={handleWithdrawMoney}>Make Transaction</button>
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
 
export default Withdraw;