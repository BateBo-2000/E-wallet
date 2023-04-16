import NavBar from "../NavBar";
import Footer from "../Footer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Custom = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'Custom Select'; 
    }, []);

    const NavElements = [
        {id:1,name:"Back" ,link:"/admin-menu" },
    ]

    const [error, setError] = useState(null)
    const [table, setTable]= useState('account_logins')
    const [condition, setCondition] = useState('1')
    const [res, setRes] = useState(null)

    const JSONDisplay = (data) => {
        const jsonStr = JSON.stringify(data, null, 2);
        return <pre>{jsonStr}</pre>;
    }


    const fetchData = (table, condition) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/admin/getCustom?table=${table}&condition=${condition}`, { 
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
        .then(data => setRes(data))
        .catch(err=> setRes(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData(table, condition)
    }

    return (<div>
        <NavBar elements={NavElements}/>
        <div className="admin-menu">  
            <div className="page-content">
                <div className="box">
                    <div className="title">
                        <h2>Custom Query</h2>
                    </div>
                    <div className="input-wrap">
                        <form className="form">
                            <div className="form-pair">
                                <label>Table</label>
                                <select className="selection" value={table} onChange={(e)=>setTable(e.target.value)}>
                                    <option value='account_logins' >account_logins</option>
                                    <option value='admin_changes' >admin_changes</option>
                                    <option value='balance' >balance</option>
                                    <option value='balance_history'>balance_history</option>
                                    <option value='currency' >currency</option>
                                    <option value='login_data' >login_data</option>
                                    <option value='reminders' >reminders</option>
                                    <option value='transactions' >transactions</option>
                                    <option value='users' >users</option>
                                </select>
                            </div>
                            <div className="form-pair">
                                <label>Condition</label>
                                <input type="text"  value={condition} required onChange={(e)=> {setCondition(e.target.value)}} />
                            </div>
                            <div className="button-wrap">
                            <button className="submit-button" onClick={handleSubmit}>Search</button>
                        </div>
                        </form>
                    </div>
                    {res && (
                        
                        <div className="tran">
                            <div className="title">
                                <h2>Results</h2>
                            </div>
                            <div className="content-box">
                                {JSONDisplay(res)}
                            </div>
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
    </div>);
}
 
export default Custom;