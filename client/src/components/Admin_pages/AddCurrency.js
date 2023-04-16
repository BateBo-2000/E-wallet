import NavBar from "../NavBar";
import Footer from "../Footer";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";
const AddCurrency = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'Add Currency'
    }, []);

    const NavElements = [
        {id:1,name:"Back" ,link:"/currency"},
    ]

    const history = useHistory()
    const [error, setError]= useState(null)
    const [currencyStr, setCurrency] = useState('')
    const [currencyId, setCurrencyId] = useState(0)

    const fetchAddCurrency = (currency_id, currency_name) => {

        fetch(`${process.env.REACT_APP_BASE_URL}/admin/addCurrency`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({   
                "currency_id": currency_id,
                "currency_name":currency_name
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
                history.push('/currency')
            }else{
                if(data?.message){
                    setError(data.message)
                }else{
                    setError(data ? data : 'Something wen wrong')
                }   
            }
        })
        .catch(err => {
            console.error(err);
        });
    }

    const handleSubmit = () => {
        fetchAddCurrency(currencyId, currencyStr)  
    }

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="transaction"> {/*reusing the transation template*/}
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Add Currency</h2>
                        </div>
                        <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>Currency id</label>
                                    <input type="number"  value={currencyId} required onChange={(e)=> {setCurrencyId(e.target.value)}} />
                                </div>
                            </form>
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
                            <button className="submit-button" onClick={handleSubmit}>Add</button>
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
 
export default AddCurrency;