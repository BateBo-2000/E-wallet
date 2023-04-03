import NavBar from "./NavBar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
const Reminders = () => {
    const reminders = [
        {id:0,title:"title reminder1", text: "sadfsadfasfdsafdsadf!", date:"10-10-2010 00:22:22", recurrning: true, cron_ex:'* 5 * 5 *' },
        {id:1,title:"title reminder2", text: "sadfdfsasadfasfdsafdsadf!", date:"10-10-2010 00:22:22", recurrning: false, cron_ex:"none"},
        {id:2,title:"title reminder1", text: "sadfsadfasfdsafdsadf!", date:"10-10-2010 00:22:22", recurrning: true, cron_ex:'* 5 * 5 *' },
        {id:3,title:"title reminder1", text: "sadfsadfasfdsafdsadf!", date:"10-10-2010 00:22:22", recurrning: true, cron_ex:'* 5 * 5 *' },
        {id:4,title:"title reminder1", text: "sadfsadfasfdsafdsadf!", date:"10-10-2010 00:22:22", recurrning: true, cron_ex:'* 5 * 5 *' },
        {id:5,title:"title reminder1", text: "sadfsadfasfdsafdsadf!", date:"10-10-2010 00:22:22", recurrning: true, cron_ex:'* 5 * 5 *' },
    
    ]
        
    const NavElements = [{id:2,name:"Home" ,link:"/"}]
    const history = useHistory()
    const handleClick = () => {
        history.push('/create-reminder')
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
                        {reminders.map((reminder)=>(
                            <div className="reminder-preview" key={reminder.id} >
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
                                            <h2>{reminder.text}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Date:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{reminder.date}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Recurrance:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{reminder.cron_ex}</h2>
                                        </div>
                                        <div className="button-wrap">
                                            <button className="submit-button">Stop</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="reminder-preview">
                            <div className="button-wrap">
                                <button className="submit-button" onClick={handleClick}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Reminders;