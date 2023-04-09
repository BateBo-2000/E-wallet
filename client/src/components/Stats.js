import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
const Stats = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Statistics'
    }, []);
    const NavElements = [{id:2,name:"Home" ,link:"/"}]

    return ( 
        <div>
        <NavBar elements={NavElements}/>
        <div className="stats">
            <div className="page-content">
                <div className="box">
                    <div className="title">
                            <h2>Account Statistics</h2>
                    </div>
                    <div className="content-box">
                        <div className="options">
                            <select className="selector" name="graph" id="graph-select">
                                <option value="spendingByDate">Spending By Date</option>
                                <option value="spendingByReciever">Spending By Reciever</option>
                                <option value="transactionsMade">Spending Transactions Made</option>
                            </select>
                        </div>
                        <div className="param">
                        <div className="form-pair">
                            <label>Start date</label>
                            <input type="date" className="selector-mini"/>
                        </div>
                        <div className="form-pair">
                            <label>End date</label>
                            <input type="date" className="selector-mini"/>
                        </div>
                        <div className="form-pair">
                            <label>Step</label>
                            <select className="selector-mini" name="graph" id="graph-select">
                                <option value="day">Day</option>
                                <option value="week">Week</option>
                                <option value="moneth">Month</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="graph">
                        <div className="content-box">
                            {/**draw chart */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>  
     );
}
 
export default Stats;