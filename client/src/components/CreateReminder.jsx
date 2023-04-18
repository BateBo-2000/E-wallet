import NavBar from "./NavBar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import React from "react";
import { useState } from "react";

const CreateReminder = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Create Reminder'
    }, []);

    const [error, setError] = useState(null)

    const [startDate, setStartDate] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [cron, setCron] = useState('')

    const fetchReminders = (start_date, title, text, cron) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/delayed-payments/create`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start_date: start_date,
                title: title,
                text: text,
                cron: cron
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
                history.push('/reminders')
            }else{
                if(data?.message){
                    setError(data.message)
                }else{
                    setError(data ? data : 'Something went worng!')
                }
            }
        })
        .catch(err => {
            setError('Something went wrong!')
        });
    }

    const fetchRemindersRec = (start_date, title, text, cron) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/delayed-payments/create-recurring`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start_date: start_date,
                title: title,
                text: text,
                cron: cron
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
                history.push('/reminders')
            }else{
                if(data?.message){
                    setError(data.message)
                }else{
                    setError(data ? data : 'Something went worng!')
                }
                
            }
        })
        .catch(err => {
            setError('Something went wrong!')
        });
    }

    const NavElements = [{id:2,name:"Back" ,link:"/reminders"}]
    const history = useHistory()
    const handleClick = () => {
        setError(null)
        if(title.length > 35) {
            setError('Title too long')
        }else{
            if(cron.length < 2){
                fetchReminders(startDate, title, text, cron)   
            }else{
                fetchRemindersRec(startDate, title, text, cron)  
            }
        }      
    }
    return ( <div>
        <NavBar elements={NavElements}/>
        <div className="create-reminder">
            <div className="page-content">
                <div className="box">
                    <div className="title">
                        <h2>Create Reminder</h2>
                    </div>
                    <div className="reminder-preview" >
                        <div className="element-box" >
                            <form className="form"> 
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Title:</h2>
                                    </div>
                                    <div className="value">
                                        <input type="text"  value={title} required onChange={(e)=> {setTitle(e.target.value)}}  />
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Text:</h2>
                                    </div>
                                    <div className="value">
                                        <input type="text"  value={text} required onChange={(e)=> {setText(e.target.value)}}  />
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Date:</h2>
                                    </div>
                                    <div className="value">
                                        <input type="datetime-local" value={startDate} required onChange={(e)=> {setStartDate(e.target.value)}}/>
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Recurrence:</h2>
                                    </div>
                                    <div className="value">
                                        <select className="selector-mini" name="graph" id="graph-select" select value={cron} onChange={(e)=>setCron(e.target.value)}>
                                            <option value="">Never</option>    
                                            <option value="* * * * *">Every Minute.</option>
                                            <option value="0 * * * *">Every hour.</option>
                                            <option value="0 8 * * *">Every day 08:00.</option>
                                            <option value="0 8 * * 1">Every week At 08:00 on Monday.</option>
                                            <option value="0 08 01 * *">At 08:00 on first day of the monnth.</option>
                                            <option value="0 08 01 */3 *">At 08:00 on first day of the monnth every 3th month.</option>
                                            <option value="0 08 01 */6 *">At 08:00 on first day of the monnth every 6th month.</option>
                                            <option value="0 08 01 */9 *">At 08:00 on first day of the monnth every 9th month.</option>
                                            <option value="0 8 1 1 *">At 08:00 on day-of-month 1 in January.</option>
                                        </select>
                                    </div> 
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="reminder-preview">
                        <div className="button-wrap">
                            <button className="submit-button" onClick={handleClick}>Add Reminder</button>
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
 
export default CreateReminder;