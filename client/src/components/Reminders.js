import NavBar from "./NavBar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Reminders = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Reminders'
    }, []);

    //to make it a bit more readable
    const cronConv =(cron)=>{
        if(!cron || cron === '') return 'Never'
        if(cron === "* * * * *") return 'Every Minute.'
        if(cron === "0 * * * *") return 'Every hour.'
        if(cron === "0 8 * * *") return 'Every day 08:00.'
        if(cron === "0 8 * * 1") return 'Every week At 08:00 on Monday.'
        if(cron === "0 08 01 * *") return 'At 08:00 on first day of the monnth.'
        if(cron === "0 08 01 */3 *") return 'At 08:00 on first day of the monnth every 3th month.'
        if(cron === "0 08 01 */6 *") return 'At 08:00 on first day of the monnth every 6th month.'
        if(cron === "0 08 01 */9 *") return 'At 08:00 on first day of the monnth every 9th month.'
        if(cron === "0 8 1 1 *") return 'At 08:00 on day-of-month 1 in January.'
        return 'cant read'
    }

    const [reminders,setReminders] = useState([])
    const [error, setError] = useState(null)

    const fetchReminders = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/delayed-payments/get`, {
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
                setReminders(data)
        })
        .catch(err => setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const fetchDelete = (reminder_id) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/delayed-payments/delete`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reminder_id: reminder_id
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
                fetchReminders()
            }else{
                setError(data ? data : 'Something went worng!')
            }
        })
        .catch(err => {
            setError('Something went wrong!')
        });
    }

    //fetches the data on loading
    useEffect(()=>{
        fetchReminders()
    },[])
        
    const NavElements = [{id:2,name:"Home" ,link:"/"}]
    const history = useHistory()
    const handleClick = () => {
        history.push('/create-reminder')
    }
    const handleStop = (id) => {
        fetchDelete(id)
        
    }
    
    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="reminders">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Reminders</h2>
                        </div>
                        {reminders && reminders.map((reminder)=>(
                            <div className="reminder-preview" key={reminder.reminder_id} >
                                <div className="element-box" >
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Title:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{reminder.title}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Text:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{reminder.remind}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Date:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{reminder.remind_date.split('T')[0]} Time: {reminder.remind_date.split('T')[1].split('.')[0]} GMT</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Recurrance:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{cronConv(reminder.remind_interval)}</h2>
                                        </div>
                                        <div className="button-wrap">
                                            <button className="submit-button" onClick={()=>handleStop(reminder.reminder_id)}>Stop</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {reminders.length === 0 && (
                            <div className="error">
                                <h2>No reminders to display!</h2>
                            </div> 
                        )}
                        <div className="reminder-preview">
                            <div className="button-wrap">
                                <button className="submit-button" onClick={handleClick}>+</button>
                            </div>
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
 
export default Reminders;