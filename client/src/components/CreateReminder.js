import NavBar from "./NavBar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import React from "react";
const CreateReminder = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Create Reminder'
    }, []);

    const NavElements = [{id:2,name:"Back" ,link:"/reminders"}]
    const history = useHistory()
    const handleClick = () => {
        history.push('/reminders')
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
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Text:</h2>
                                    </div>
                                    <div className="value">
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Date:</h2>
                                    </div>
                                    <div className="value">
                                        <input type="datetime-local" />
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Recurrance:</h2>
                                    </div>
                                    <div className="value">
                                        <input type="text" />
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
                    <div className="title">
                        <p>error:dsfsadfds</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
     );
}
 
export default CreateReminder;