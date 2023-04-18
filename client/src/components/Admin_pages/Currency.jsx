import NavBar from "../NavBar";
import Footer from "../Footer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Currency = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'Currency'; 
    }, []);

    const NavElements = [
        {id:1,name:"Add currency" ,link:"/add-currency" },
        {id:2,name:"Back" ,link:"/admin-menu" },
    ]

    const [error, setError] = useState(null)
    const [currency, setCurrency]= useState(null)


    const fetchCurrency = (table,condition) => {
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
        .then(data => setCurrency(data))
        .catch(err=> setError(err?.message ? err?.message :'Something went worng!'))
    }

    useEffect(()=>{
        fetchCurrency('currency','1 ORDER BY currency_id')
    },[])

    return (<div>
        <NavBar elements={NavElements}/>
        <div className="admin-menu">  
            <div className="page-content">
                <div className="box">
                    <div className="title">
                        <h2>Currencies</h2>
                    </div>
                    {currency && currency.map((currency) => (
                        <div className="tran" key={currency.currency_id}>
                            <div className="content-box">
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Currency ID:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{currency.currency_id}</h2>
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Currency:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{currency.currency_name}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!error && !currency && (
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
 
export default Currency;