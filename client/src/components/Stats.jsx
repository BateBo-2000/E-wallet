import NavBar from "./NavBar" 
import Footer from "./Footer" 
import React from "react" 
import { useState } from "react" 
import { useEffect } from "react" 
import { PieChart, Pie, Cell, Tooltip, XAxis, YAxis, Legend, BarChart, Bar, CartesianGrid} from 'recharts' 

const Stats = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Statistics'
    }, []) 
    const NavElements = [{id:2,name:"Home" ,link:"/"}]

    const [error, setError] = useState('Input dates')
    const [selectValue, setSelectValue] = useState('spendingByDate')
    const [selectStep, setSelectStep] = useState('day')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [data, setData] = useState(null)

    const fetchSpendingByDate = (sDate,eDate,step) =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/stats/spending`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "start_date":sDate,
                "end_date":eDate,
                "step":step
            })
        })
        .then(res => {
            if (!res.ok) {
                if (res.status === 400) {
                    return res.json().then(err=> setError(err)) 
                }else{
                    throw new Error(`HTTP error! status: ${res.status}`) 
                }    
            }
            return res.json() 
        })
        .then(data => {
            setData(data)
        })
        .catch(err => setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const fetchSpendingByReciever = () =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/stats/spending-reciever`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => { 
            if (!res.ok) {
                if (res.status === 400) {
                    return res.json().then(err=> setError(err)) 
                }else{
                    throw new Error(`HTTP error! status: ${res.status}`) 
                }    
            }
            return res.json() 
        })
        .then(data => {
            setData(data)
        })
        .catch(err => setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const fetchCountByReciever = (sDate,eDate) =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/stats/reciever`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "start_date":sDate,
                "end_date":eDate
            })
        })
        .then(res => {
            if (!res.ok) {
                if (res.status === 400) {
                    return res.json().then(err=> setError(err)) 
                }else{
                    throw new Error(`HTTP error! status: ${res.status}`) 
                }    
            }
            return res.json() 
        })
        .then(data => {
            setData(data)
        })
        .catch(err => setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const COLORS = ['#0088FE', '#F010D8', '#2810F0', '#FF8042'] 

    const myBarChart = ( data ) => {
        if(data){
            return (
                <BarChart
                  width={800}
                  height={400}
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" name="Spent" fill="#8884d8" />
                </BarChart>
              ) 
        }
        
    }

    const PieChartSpending = (data) => {
        if(data){
            const formattedData = data?.map(({amount, reciever}) => ({
                amount: +amount,
                reciever: 'Receiver '+reciever,
            })) 
            return (
            <PieChart width={800} height={400}>
                <Pie
                data={formattedData}
                dataKey="amount"
                nameKey="reciever"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
                >
                {formattedData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Tooltip />
            </PieChart>
            )
        }
    }
      
    const PieChartCount = (data) => {
        if(data){
            const formattedData = data.map(item => ({
                value: parseFloat(item.transactions),
                name: `Reciever ${item.reciever}`
            })) 
            return (
                <PieChart width={800} height={400}>
                  <Pie
                    data={formattedData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              )
        }
    }

    useEffect(()=>{
        //every ti,e data is updated we check for errors
        setError(null)
    },[])
    /* eslint-disable */
    //refresh after every select change
    useEffect(()=>{
        setError(null)
        if(!error){
            if(selectValue === 'spendingByDate'){
                fetchSpendingByDate(startDate, endDate, selectStep)
            }else if(selectValue === 'spendingByReciever'){
                fetchSpendingByReciever()
            }else if(selectValue === 'count'){
                fetchCountByReciever(startDate,endDate)
            }
        }
    }, [startDate,endDate,selectValue,selectStep])
    /* eslint-enable */

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
                            <select className="selector" name="graph" id="graph-select" value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                                <option value="spendingByDate">Spending By Date</option>
                                <option value="spendingByReciever">Spending With Receiver</option>
                                <option value="count">Count By Receiver</option>
                            </select>
                        </div>
                        <div className="param">
                        {selectValue === 'spendingByDate' && (
                            <div className="form-pair">
                                <label>Start date</label>
                                <input type="date" className="selector-mini" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                            </div>
                        )}
                        {selectValue === 'spendingByDate' && (
                            <div className="form-pair">
                                <label>End date</label>
                                <input type="date" className="selector-mini" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
                            </div>
                        )}
                        {selectValue === 'spendingByDate' && (
                            <div className="form-pair">
                                <label>Step</label>
                                <select className="selector-mini" name="graph" id="graph-select" value={selectStep} onChange={(e) => setSelectStep(e.target.value)}>
                                    <option value="day">Day</option>
                                    <option value="week">Week</option>
                                    <option value="month">Month</option>
                                </select>
                            </div>
                        )}
                        {selectValue === 'count' && (
                            <div className="form-pair">
                                <label>Start date</label>
                                <input type="date" className="selector-mini" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                            </div>
                        )}
                        {selectValue === 'count' && (
                            <div className="form-pair">
                                <label>End date</label>
                                <input type="date" className="selector-mini" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="graph">
                        <div className="content-box">
                            <div className="elements">
                                {!error && selectValue === 'spendingByDate' && myBarChart(data)}
                                {!error && selectValue === 'spendingByReciever' && PieChartSpending(data)}
                                {!error && selectValue === 'count' && PieChartCount(data)}
                                {error && 
                                    <div className="error">
                                        <h2>{error}</h2>
                                    </div> 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>  
     )
}
 
export default Stats 