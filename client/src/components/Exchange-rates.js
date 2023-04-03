import NavBar from "./NavBar";
import Footer from "./Footer";
const ExchangeRates = () => {
    const NavElements = [{id:2,name:"Converter" ,link:"/converter"},{id:1,name:"Home" ,link:"/"}]

    // const answer = {
    //       "USD": {
    //         "start_rate": 1.080672,
    //         "end_rate": 1.08985,
    //         "change": 0.0092,
    //         "change_pct": 0.8493
    //       },
    //       "BGN": {
    //         "start_rate": 1.957107,
    //         "end_rate": 1.95755,
    //         "change": 0.0004,
    //         "change_pct": 0.0226
    //       },
    //       "GBP": {
    //         "start_rate": 0.878819,
    //         "end_rate": 0.878169,
    //         "change": -0.0007,
    //         "change_pct": -0.074
    //       }
    //   }
    
    //   const flactuatuins = {
    //     "success": true,
    //     "fluctuation": true,
    //     "start_date": "2023-02-17",
    //     "end_date": "2023-01-12",
    //     "base": "EUR",
    //     "rates": {
    //       "USD": {
    //         "start_rate": 1.071983,
    //         "end_rate": 1.085977,
    //         "change": 0.014,
    //         "change_pct": 1.3054
    //       },
    //       "BGN": {
    //         "start_rate": 1.960218,
    //         "end_rate": 1.957857,
    //         "change": -0.0024,
    //         "change_pct": -0.1204
    //       },
    //       "GBP": {
    //         "start_rate": 0.889982,
    //         "end_rate": 0.888845,
    //         "change": -0.0011,
    //         "change_pct": -0.1278
    //       }
    //     }
    //   }
    //   const timeseries = {
    //     "success": true,
    //     "timeseries": true,
    //     "start_date": "2023-03-27",
    //     "end_date": "2023-04-03",
    //     "base": "EUR",
    //     "rates": {
    //       "2023-03-27": {
    //         "USD": 1.080672,
    //         "BGN": 1.957107,
    //         "GBP": 0.878819
    //       },
    //       "2023-03-28": {
    //         "USD": 1.083823,
    //         "BGN": 1.954886,
    //         "GBP": 0.87911
    //       },
    //       "2023-03-29": {
    //         "USD": 1.084328,
    //         "BGN": 1.955412,
    //         "GBP": 0.880745
    //       },
    //       "2023-03-30": {
    //         "USD": 1.090441,
    //         "BGN": 1.95754,
    //         "GBP": 0.880318
    //       },
    //       "2023-03-31": {
    //         "USD": 1.08707,
    //         "BGN": 1.953295,
    //         "GBP": 0.880646
    //       },
    //       "2023-04-01": {
    //         "USD": 1.08707,
    //         "BGN": 1.953295,
    //         "GBP": 0.880575
    //       },
    //       "2023-04-02": {
    //         "USD": 1.080567,
    //         "BGN": 1.941611,
    //         "GBP": 0.879274
    //       },
    //       "2023-04-03": {
    //         "USD": 1.090643,
    //         "BGN": 1.955738,
    //         "GBP": 0.877993
    //       }
    //     }
    //   }

      


    return (
        <div>
            <NavBar elements={NavElements}/>
            <div className="exchange-rates">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Exchange Rates</h2>
                        </div>
                        <div className="content-box">
                            <div className="options">
                                <select className="selector" name="graph" id="graph-select">
                                    <option value="fluctuation">Fluctuation</option>
                                    <option value="timeseries">Timeseries</option>
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
                                    <label>Base Currency</label>
                                    <input type="text" className="selector-mini"/>
                                </div>
                                <div className="form-pair">
                                    <label>Currecny/ies</label>
                                    <input type="text" className="selector-mini"/>
                                </div>
                            </div> 
                        </div>
                        <div className="elements">
                            {/* {answers.map((answer) => (
                                <div className="balanceElement" key={balance.balance_id}>
                                    <Link to={`/balance/${balance.balance_id}`}>
                                        <div className="element-box" >
                                            <div className="balance-preview">
                                                <div className="balance-id-wrap">
                                                    <h2>Balance: {balance.balance_id}</h2>
                                                </div>
                                                <div className="balance-data-wrap">
                                                    <h3>{balance.balance}{balance.currency_id}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>  
            <Footer/>
        </div>  
    );
}
 
export default ExchangeRates;