import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
import { useState } from "react";
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useEffect } from "react";


const ExchangeRates = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Exchange Rates'
    }, []);

    const NavElements = [{id:2,name:"Converter" ,link:"/converter"},{id:1,name:"Home" ,link:"/"}]
    
    const [error, setError] = useState('Input correct data and refresh!')
    const [selectValue, setSelectValue] = useState('fluctuation')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [baseC, setBaseC] = useState('')
    const [currency, setCurrency] = useState('')
    const [currencyArray, setCurrencyArray] = useState(null)
    const [data, setData] = useState(null)
    const [preparedData, setPreparedData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isFirstRun, setIsFirstRun] = useState(true);

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
            setIsLoading(false)
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
            setIsLoading(false)
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
        str=str.replace(/\s/g, '')//chages space for '' - basically removes spaces
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
            <Bar dataKey="start_rate" fill="#8884d8" name="Start Rate"/>
            <Bar dataKey="end_rate" fill="#82ca9d" name="End Rate" />
          </BarChart>
        );
    }

    const TimeseriesChart = (data) => {
        const lines = currencyArray.map((cur) => (
            <Line
              key={cur}
              type="monotone"
              dataKey={cur}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          ));
        return (
        <LineChart width={800} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {lines}
        </LineChart>
        );
    }

    /* eslint-disable */
    //the actual change on our page is made with useEffect because the site with the excahnge rates is slow
    useEffect(()=>{
        setIsLoading(false)
        setError(null)
        if(data && selectValue === "fluctuation"){
            let prepData = []
            currencyArray.forEach(element=>{
                prepData.push({name: element, start_rate: data?.rates[element]?.start_rate, end_rate: data?.rates[element]?.end_rate,})
            })
            setPreparedData(prepData)
        }
        if(data && selectValue === "timeseries"){
            let prepData = []
            for (const date in data.rates) {
                let row = {}
                for(const cur in currencyArray){
                    // console.log(cur )
                    // console.log(`${currencyArray[cur]} value on ${date}: ${data.rates[date][currencyArray[cur]]}`);
                    row[currencyArray[cur]] = data.rates[date][currencyArray[cur]]
                }
                prepData.push(row)
            }
            setPreparedData(prepData)
        }
    },[data])


    useEffect(()=>{
        if(isFirstRun){ //becuase first mounting the variable is techically an update we loop it like so
            setIsFirstRun(false)
            setData(null)
        }else{
            if (selectValue === 'timeseries') {
                //fetch timeseries
                fetchTimeseries(currencyArray, baseC, startDate ,endDate)
                // console.log(currencyArray, baseC, startDate, endDate)
                
            }else {
                //fetch flactuations
                fetchFluctuations(currencyArray, baseC, startDate ,endDate)
                // console.log(currencyArray, baseC, startDate, endDate)
            }
        }
    },[currencyArray])
    /* eslint-enable */

    const handleRefresh = () => {
        setIsLoading(true)
        setError(null)
        setCurrencyArray(arrayify(currency,','))
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
                           {!error && !isLoading  && selectValue === 'timeseries' && TimeseriesChart(preparedData)}
                           {!error && !isLoading  && selectValue === 'fluctuation' && FluctuationsChart(preparedData)}
                        </div>
                        {isLoading && 
                            <div className="error">
                                <h2>LOADING ...</h2>
                            </div> 
                        }
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