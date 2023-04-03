import NavBar from "./NavBar";
import Footer from "./Footer";

const BalanceHistory = () => {
    const balance_history = [
        {
          "balance_history_id": 1,
          "balance_id": 4,
          "user_id": 4,
          "amount_after_change": 1000,
          "currency_name": "USD",
          "change_amount": 0,
          "date_of_update": "2023-03-15T20:52:47.000Z",
          "reason_for_change": "got laid by prostitute"
        },
        {
          "balance_history_id": 2,
          "balance_id": 4,
          "user_id": 4,
          "amount_after_change": 1000,
          "currency_name": "USD",
          "change_amount": 0,
          "date_of_update": "2023-03-15T20:52:48.000Z",
          "reason_for_change": "got laid by prostitute"
        }
    ]
    
    const NavElements = [
        {id:1,name:"Back" ,link:"/balance"},
    ]

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="balance">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>History for balance: {balance_history.balance_id}</h2>
                        </div>
                        <div className="content-box">
                            <div className="form-pair">
                                <label>Start date</label>
                                <input type="date" className="selector-mini"/>
                            </div>
                            <div className="form-pair">
                                <label>End date</label>
                                <input type="date" className="selector-mini"/>
                            </div>
                        </div>
                        {balance_history.map((record) => (
                            <div className="tran" key={record.record_id}>
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
                                            <h2>{record.change_amount}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>After change</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{record.amount_after_change}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Currency</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{record.currency_name}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Date:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{record.date_of_update.split('T')[0]+"  Time: "+record.date_of_update.split('T')[1].split('.')[0]}</h2>
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
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default BalanceHistory;