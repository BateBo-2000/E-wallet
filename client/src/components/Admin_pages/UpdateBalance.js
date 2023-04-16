import NavBar from "../NavBar";
import Footer from "../Footer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const UpdateBalance = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'Update Balance'
    }, []);

    const NavElements = [
        {id:1,name:"Back" ,link:"/admin-menu" },
    ]

    const [error, setError] = useState(null)
    const [balances, setBalances] = useState(null)
    const [userId, setUserId] = useState(0)
    const history = useHistory()

    const fetchBalances = (table,condition) => {
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
        .then(data => setBalances(data))
        .catch(err=> setError(err?.message ? err?.message :'Something went worng!'))
    }
    const fetchDeleteBalance = (id) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/admin/deleteBalance?balance_id=${id}`, { 
            method: 'DELETE',
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
        .then(data => {
            if(data?.message === 'SUCCESS'){
                setError('SUCCESS')
                fetchBalances('balcur', '1 LIMIT 50')
            }else{
                if(data?.message){
                    setError(data.message)
                }else{
                    setError(data ? data : 'Someting went wrong!')
                }
            }
            
        })
        .catch(err=> setError(err?.message ? err?.message :'Something went worng!'))
    }


    useEffect(()=>{
        fetchBalances('balcur', '1 LIMIT 50')
    },[])

    const handleSearch = () => {
        fetchBalances('balcur', 'user_id='+userId)
    }

    const handleDelete = (id) => {
        fetchDeleteBalance(id)
    }
    const handleEdit = (balance) => {
        history.push({ pathname: '/change-balance', state:  {balance}})
    }

    return (<div>
        <NavBar elements={NavElements}/>
        <div className="admin-menu">  
            <div className="page-content">
                <div className="box">
                    <div className="title">
                        <h2>Search Users</h2>
                    </div>
                    <div className="input-wrap">
                        <form className="form">
                            <div className="form-pair">
                                <label>User Id:</label>
                                <input type="text"  value={userId} required onChange={(e)=> {setUserId(e.target.value)}} />
                            </div>
                        </form>
                    </div>
                    <div className="button-wrap">
                        <button className="submit-button" onClick={handleSearch}>Search</button>
                    </div>
                    <div className="title">
                        <h2>Results</h2>
                    </div>
                    {balances && balances[0] && balances.map(balance=>(
                        <div className="tran" key={balance.balance_id}>
                            <div className="content-box">
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Balance Id:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{balance.balance_id}</h2>
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>User Id:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{balance.user_id}</h2>
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Balance:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{balance.balance.toFixed(2)} {balance.currency_name}</h2>
                                    </div>
                                </div>
                                <div className="button-wrap">
                                    <button className="submit-button" onClick={()=>handleEdit(balance)}>Edit</button>
                                    <button className="submit-button" onClick={()=>handleDelete(balance.balance_id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!error && !balances && (
                        <div className="title">
                            <h2>Loading ... </h2>
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
 
export default UpdateBalance;