import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddMoney = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Add'; 
    }, []);

    
    const history = useHistory()
    const [error, setError]= useState(null)
    const [currencyStr, setCurrency] = useState('')

    // const fetchImportMoney = (amount) => {
        

    //     fetch(`${process.env.REACT_APP_BASE_URL}/balance/create`, {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             currency: amount
    //         })
    //     })
    //     .then(res => {          /** here the res is checked if it is technically alright  (like if the server has answered) */
    //         if (!res.ok) {
    //             throw new Error(`HTTP error! status: ${res.status}`);
    //         }
    //         return res.json();
    //     })
    //     .then(data => {
    //         if(data?.message === "SUCCESS"){
    //             history.push('/')
    //         }else{
    //             setError(data.message ? data.message : 'Something went worng!')
    //         }
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }


    const currency = "BGN"
    const NavElements = [
        {id:1,name:"Back" ,link:"/balance"},
    ]

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="transaction">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Insert money into your wallet</h2>
                        </div>
                        <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>Amount in {currency}</label>
                                    <input type="Number"/>
                                </div>
                            </form>
                        </div>
                        <div className="button-wrap">
                            <button className="submit-button">Make Transaction</button>
                        </div>
                        <div className="title">
                            <h2>error</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default AddMoney;