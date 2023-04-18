import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
import { useState } from "react";
const Converter = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Converter'
    }, []);

    const [error, setError] = useState('')
    const [C1, setC1] = useState('')
    const [C2, setC2] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [ans, setAns] = useState('')

    const fetchMakeTransaction = (fromCurrency, toCurrency, amount, date) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/exchange-rates/converter`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fromCurrency":fromCurrency,
                "toCurrency":toCurrency,
                "amount":amount,
                "date":date
            })
        })
        .then(res => {          /** here the res is checked if it is technically alright  (like if the server has answered) */
            if (!res.ok) {
                if (res.status === 400) {
                    return res.json().then(err=> setError(err));
                }else{
                    throw new Error(`HTTP error! status: ${res.status}`);
                }    
            }
            return res.json();
        })
        .then(data => {
            setAns(data)
        })
        .catch(err => setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const NavElements = [{id:1,name:"Home" ,link:"/"}]

    const handleConvert = () => {
        setError('')
        
        //adding the oprion to not set date
        if(date.length > 1) {  
            fetchMakeTransaction(C1,C2,amount, date)
            
        }else{  
            //if date isnt set youll just need to double click
            const temp = new Date()
            setDate(temp.toISOString().split('T')[0])
        } 
    }
    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="converter">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Converter</h2>
                        </div>
                        <div className="content-box">
                            <div className="form-pair">
                                <label>from Currency</label>
                                <input type="text" className="selector-mini" value={C1} onChange={(e)=>setC1(e.target.value)}/>
                            </div>
                            <div className="form-pair">
                                <label>to Currency</label>
                                <input type="text" className="selector-mini" value={C2} onChange={(e)=>setC2(e.target.value)}/>
                            </div> 
                            <div className="form-pair">
                                <label>Amount</label>
                                <input type="number" className="selector-mini" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                            </div> 
                            <div className="form-pair">
                                <label>Date</label>
                                <input type="date" className="selector-mini" value={date} onChange={(e)=>setDate(e.target.value)}/>
                            </div>
                        
                        </div>
                        <div className="button-wrap">
                                <button className="submit-button" onClick={handleConvert}>Convert</button>
                            </div>
                        <div className="answer-wrap">
                                <label>Amount in {C2}</label>
                                <input type="text" className="answer" value={ans?.result}/>
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
 
export default Converter;