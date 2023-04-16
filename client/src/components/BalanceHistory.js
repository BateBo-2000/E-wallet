import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BalanceHistory = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Balance History'
    }, []);
    
    
    const location = useLocation()
    const balance = location.state?.balance

    const [error, setError]= useState(null)
    const [balanceHistory, setBalanceHistory] = useState(null)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    if(!balance) setError('Something went worng')

    const NavElements = [
        {id:1,name:"Back" ,link:{ pathname: `/balance/id=${balance?.balance_id}`, state:  {balance}}},
    ]




    const fetchBalanceHistoryLast50 = (balance_id) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/balance_history/getHistory`, { 
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "balance_id":balance_id
            })
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else{
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
        .then(data => setBalanceHistory(data))
        .catch(err => setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const fetchBalanceHistoryByDate = (balance_id, start_date, end_date) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/balance_history/getHistoryByDates`, { 
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "balance_id":balance_id,
                "start_date":start_date,
                "end_date":end_date
            })
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else{
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
        .then(data => setBalanceHistory(data))
        .catch(err=> setError(err?.message ? err?.meassge : "Something went wrong"))
    }


    /* eslint-disable */
    //sets the new transactions by money
    useEffect(()=>{ 
        setBalanceHistory(null)
        setError(null)
        if(startDate.length > 1 && endDate.length > 1){
            //searches by date
            fetchBalanceHistoryByDate(balance.balance_id, startDate, endDate)
            console.log('first')
            console.log(balanceHistory)
        }else{
            //searches all
            fetchBalanceHistoryLast50(balance.balance_id)
            console.log('second')
            console.log(balanceHistory)
        }
    },[startDate, endDate])
    /* eslint-enable */
    
    //handle click

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="balance">
                <div className="page-content">
                    <div className="box">
                        
                        <div className="title">
                            <h2>Balance History</h2>
                        </div>
                        <div className="content-box">
                            <div className="form-pair">
                                <label>Start date</label>
                                <input type="date" className="selector-mini" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                            </div>
                            <div className="form-pair">
                                <label>End date</label>
                                <input type="date" className="selector-mini" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
                            </div>
                        </div>
                        {balanceHistory && balanceHistory.map((record) => (
                            <div className="tran" key={record.balance_history_id}>
                                <div className="content-box">
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Balance:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{record.balance_id}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Change Amount</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{record.change_amount.toFixed(2)}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>After change</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{record.amount_after_change.toFixed(2)} {record.currency_name}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Date:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{record.date_of_update.split('T')[0]+"  Time: "+record.date_of_update.split('T')[1].split('.')[0]} GMT</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Reason for Change</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{record.reason_for_change}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
 
export default BalanceHistory;