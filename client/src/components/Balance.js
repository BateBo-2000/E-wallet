import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
const Balance = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Balance:'
    }, []);

    const location = useLocation()
    const balance = location.state.balance
    // thats the driving value
    const [selectValue, setSelectValue] = useState('Last50');

    const [error, setError] = useState('')
    const [trans, setTrans] = useState(null)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [dependency, setDependency] = useState('>')
    const [amount, setAmount] = useState(0)
    const [recieverId, setRecieverId] = useState(0)

    const fetchLast50Transactions = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/transactions/searchByBalance`, { 
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                balance_id: balance.balance_id*1
            })
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else{
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
        .then(data => setTrans(data))
        .catch(err=> setError(err?.message ? err?.message :'Something went worng!'))
    }

    

    /* eslint-disable */
    //sets the new transactions
    useEffect(()=>{
        setTrans(null)
        setError(null)
        if(selectValue === 'Last50') {
            //checks if the date is set
            fetchLast50Transactions()
        } 
    },[selectValue])

    const fetchTransByDate = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/transactions/searchByDate`, { 
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "start_date": startDate,
                "end_date": endDate,
                balance_id: balance.balance_id*1
            })
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else{
                throw new Error(`Incorrect Date`);
            }
        })
        .then(data => setTrans(data))
        .catch(err=> setError(err?.message ? err?.message :'Something went worng!'))
    }

    
    //sets the new transactions by date
    useEffect(()=>{
        setTrans(null)
        setError(null)
        if(selectValue === 'byDate') {
            //checks if the date is set
            if(startDate.length > 1 && endDate.length > 1){
                fetchTransByDate(startDate, endDate)
            } 
        } 
    },[startDate, endDate])
    

    const fetchTransByMoney = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/transactions/searchByMoney`, { 
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dependency: dependency,
                amount: amount,
                balance_id: balance.balance_id*1
            })
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else{
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
        .then(data => setTrans(data))
        .catch(err=> setError(err?. message ? err?.meassge : "Something went wrong"))
    }

    //sets the new transactions by money
    useEffect(()=>{ 
        setTrans(null)
        setError(null)
        if(selectValue === 'byMoney'){
            //checks if the amount
            if(amount !== 0){
                fetchTransByMoney()
            }else{
                setError('Amount must be grater than 0')
            }
        }   
    },[amount, dependency])
    
    const fetchTransByReciever = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/transactions/searchByReciever`, { 
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reciever_id: recieverId*1,
                balance_id: balance.balance_id*1
            })
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else{
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
        .then(data => setTrans(data))
        .catch(err=> setError(err?. message ? err?.meassge : "Something went wrong"))
    }

    //sets the new transactions by money
    useEffect(()=>{ 
        setTrans(null)
        setError(null)
        if(selectValue === 'byReciever'){
            //checks if the amount
            if(recieverId !== 0){
                fetchTransByReciever()
            }else{
                setError('Reciever id must be grater than 0')
            }
        }   
    },[recieverId])
    /* eslint-enable */
    
    
    const NavElements = [
        {id:1,name:"Home" ,link:"/"},
        {id:3,name:"Balance History" ,link:"/balance-history"},
        {id:4,name:"Make Transaction" ,link:"/make-transaction"},
        {id:5,name:"Add money" ,link:"/add-money"},
        {id:6,name:"Withdraw money" ,link:"/withdraw"}
    ]
    
    const handleChange = (e) => {
        setSelectValue(e.target.value);
    }

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="balance">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Transactions for Balance {balance.balance_id}</h2>
                        </div>
                        <div className="content-box">
                            <div className="options">
                                <select className="selector" name="graph" id="graph-select" select value={selectValue} onChange={handleChange}>
                                    <option value="Last50">Last 50 transactions</option>
                                    <option value="byDate">Search By Date</option>
                                    <option value="byReciever">Search By Reciever</option>
                                    <option value="byMoney">Search By Money</option>
                                </select>
                            </div>
                            {selectValue === "byDate" && 
                                <div className="param">
                                    <div className="form-pair">
                                        <label>Start date</label>
                                        <input type="date" className="selector-mini" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                                    </div>
                                    <div className="form-pair">
                                        <label>End date</label>
                                        <input type="date" className="selector-mini" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
                                    </div>
                                </div>
                            }
                            {selectValue === "byMoney" && 
                                <div className="param">
                                    <div className="form-pair">
                                        <label>Condition</label>
                                        <select className="selection" value={dependency} onChange={(e)=>setDependency(e.target.value)}>
                                            <option value='>' >{'>'}</option>
                                            <option value='<' >{'<'}</option>
                                        </select>
                                    </div>
                                    <div className="form-pair">
                                        <label>Amount</label>
                                        <input type="number" className="selector-mini" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                                    </div>
                                </div>
                            }  
                            {selectValue === "byReciever" && 
                                <div className="param">
                                    <div className="form-pair">
                                        <label>Reciever balance id</label>
                                        <input type="number" className="selector-mini" value={recieverId} onChange={(e)=>setRecieverId(e.target.value)}/>
                                    </div>
                                </div>
                            }     
                        </div>
                        {trans && trans.map((trans) => (
                            <div className="tran" key={trans.trans_id}>
                                <div className="content-box">
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Transaction ID:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{trans.trans_id}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Reciever id</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{trans.reciever_id}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Reciever's balance id</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{trans.reciever_balance_id}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Amount:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{trans?.amount} {trans?.currency_name}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Date:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{trans.date_done.split('T')[0]} Time: {trans.date_done.split('T')[1].split('.')[0]}</h2>
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
 
export default Balance;