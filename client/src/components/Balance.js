import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";

const Balance = () => {
    const balance = {
        "balance_id": 17,
        "user_id": 35,
        "balance": 302.57,
        "currency_id": 5
    }
    const transactions = [
        {
          "trans_id": 29,
          "user_id": 35,
          "sender_balance_id": 2,
          "amount": 46.49,
          "currency_name": "BGN",
          "reciever_id": 6,
          "reciever_balance_id": null,
          "date_done": "2023-03-20T21:55:16.000Z"
        },
        {
          "trans_id": 30,
          "user_id": 35,
          "sender_balance_id": 2,
          "amount": 46.49,
          "currency_name": "BGN",
          "reciever_id": 6,
          "reciever_balance_id": null,
          "date_done": "2023-03-20T21:55:48.000Z"
        },
        {
            "trans_id": 31,
            "user_id": 35,
            "sender_balance_id": 2,
            "amount": 46.49,
            "currency_name": "BGN",
            "reciever_id": 6,
            "reciever_balance_id": null,
            "date_done": "2023-03-20T21:55:16.000Z"
        },
    ]
    
    const NavElements = [
        {id:1,name:"Home" ,link:"/"},
        {id:3,name:"Balance History" ,link:"/balance-history"},
        {id:4,name:"Make Transaction" ,link:"/make-transaction"},
        {id:5,name:"Add money" ,link:"/add-money"},
        {id:6,name:"Withdraw money" ,link:"/withdraw"}
    ]

    const getInitialState = () => {
        const value = "timeseries";
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="balance">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Balance: {balance.balance_id}</h2>
                        </div>
                        <div className="content-box">
                            <div className="options">
                                <select className="selector" name="graph" id="graph-select" select value={value} onChange={handleChange}>
                                    <option value="fluctuation">Search By Date</option>
                                    <option value="timeseries">Search By Money</option>
                                </select>
                            </div>
                            {value === "fluctuation" && 
                                <div className="param">
                                    <div className="form-pair">
                                        <label>Start date</label>
                                        <input type="date" className="selector-mini"/>
                                    </div>
                                    <div className="form-pair">
                                        <label>End date</label>
                                        <input type="date" className="selector-mini"/>
                                    </div>
                                </div>
                            }
                            {value === "timeseries" && 
                                <div className="param">
                                    <div className="form-pair">
                                    <label>Condition</label>
                                    <select className="selection">
                                        <option value="fluctuation">more than</option>
                                        <option value="timeseries">less than</option>
                                    </select>
                                    </div>
                                    <div className="form-pair">
                                        <label>Amount</label>
                                        <input type="number" className="selector-mini"/>
                                    </div>
                                </div>
                            }     
                        </div>
                        {transactions.map((trans) => (
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
                                            <h2>Reciever</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{trans.reciever_id}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Amount:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{trans.amount}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Date:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{trans.date_done}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Balance;