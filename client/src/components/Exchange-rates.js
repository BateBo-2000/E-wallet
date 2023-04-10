import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
import { useState } from "react";
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect } from "react";


const ExchangeRates = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Exchange Rates'
    }, []);

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

    // const data = [
    //     {
    //       name: 'Jan',
    //       sales: 2400,
    //       expenses: 1000,
    //     },
    //     {
    //       name: 'Feb',
    //       sales: 1398,
    //       expenses: 2000,
    //     },
    //     {
    //       name: 'Mar',
    //       sales: 9800,
    //       expenses: 5000,
    //     },
    //     {
    //       name: 'Apr',
    //       sales: 3908,
    //       expenses: 6000,
    //     },
    //     {
    //       name: 'May',
    //       sales: 4800,
    //       expenses: 3000,
    //     },
    //     {
    //       name: 'Jun',
    //       sales: 3800,
    //       expenses: 2000,
    //     },
    //   ];


    
    // const data2 = [
    //     { name: 'Jan', value: 2100 },
    //     { name: 'Feb', value: 2300 },
    //     { name: 'Mar', value: 1300 },
    //     { name: 'Apr', value: 4300 },
    //     { name: 'May', value: 1500 },
    //     { name: 'Jun', value: 6300 },
    //     { name: 'Jul', value: 7700 },
    // ];
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

    const [error, setError] = useState('Input correct data and refresh!')
    const [selectValue, setSelectValue] = useState('fluctuation')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [baseC, setBaseC] = useState('')
    const [currency, setCurrency] = useState('')
    const [currencyArray, setCurrencyArray] = useState(null)
    const [data, setData] = useState(null)
    const [preparedData, setPreparedData] = useState(null)
    // const prepareData = (data) => {
    //     return data['USD']
    // }

    const fetchTimeseries = (curArray, base, sDate, EDate) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/exchange-rates/timeseries/custom`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "currencyArray":curArray,
                "baseCurrency":base,
                "start_date":sDate,
                "end_date":EDate
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
            setData(data)
        })
        .catch(err => setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const fetchFluctuations = (curArray, base, sDate, EDate) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/exchange-rates/fluctuation/custom`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "currencyArray":curArray,
                "baseCurrency":base,
                "start_date":sDate,
                "end_date":EDate
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
            setData(data)
        })
        .catch(err => setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const arrayify = (str,split) => {
        let array = []
        if(str.includes(',')){
            str.split(split).forEach(element => array.push(element))
        }else{
            array.push(str)
        }
        return array
    }

    const FluctuationsChart = (data) => {
        return (
          <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="expenses" fill="#82ca9d" />
          </BarChart>
        );
    }

    const TimeseriesChart = (data) => {
        return (
        <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        );
    }

    //the actual change on our page is made with useEffect because the site with the excahnge rates is slow
    useEffect(()=>{
        setError(null)
        if(data){
            let prepData = []
            currencyArray.forEach(element=>{
                prepData.push({name: element, start_rate: data?.rates[element]?.start_rate, end_rate: data?.rates[element]?.end_rate,})
            })
            FluctuationsChart(prepData)
        }
    },[data])


    const handleRefresh = () => {
        setError(null)
        setCurrencyArray(arrayify(currency,',')) 
        if (selectValue === 'timeseries') {
            //fetch timeseries
            fetchTimeseries(currencyArray, baseC, startDate ,endDate)
        }else {
            //fetch flactuations
            //fetchFluctuations(currencyArray, baseC, startDate ,endDate)

            setError(null)
            let prepData = [{
                name: 'Mar',
                sales: 9800,
                expenses: 5000,
              },
              {
                name: 'Apr',
                sales: 3908,
                expenses: 6000,
              }]
            FluctuationsChart(prepData)
        }
    }

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
                                <select className="selector" name="graph" id="graph-select" select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                                    <option value="fluctuation">Fluctuation</option>
                                    <option value="timeseries">Timeseries</option>
                                </select>
                            </div>
                            <div className="param">
                                <div className="form-pair">
                                    <label>Start date</label>
                                    <input type="date" className="selector-mini" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                                </div>
                                <div className="form-pair">
                                    <label>End date</label>
                                    <input type="date" className="selector-mini" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
                                </div>
                                <div className="form-pair">
                                    <label>Base Currency</label>
                                    <input type="text" className="selector-mini" value={baseC} onChange={(e)=>setBaseC(e.target.value)}/>
                                </div>
                                <div className="form-pair">
                                    <label>Currecny/ies</label>
                                    <input type="text" className="selector-mini" value={currency} onChange={(e)=>setCurrency(e.target.value)}/>
                                </div>
                                <div className="form-pair">
                                    <div className="button-wrap">
                                        <button className="submit-button" onClick={handleRefresh}>refresh</button>
                                    </div>
                                </div>
                            </div> 
                            
                        </div>
                        <div className="elements">
                           {!error  && selectValue === 'timeseries' && TimeseriesChart()}
                           {!error  && selectValue === 'fluctuation' && FluctuationsChart()}
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
 
export default ExchangeRates;