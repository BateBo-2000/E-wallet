import NavBar from "./NavBar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
const Account = () => {
    const NavElements = [{id:2,name:"Home" ,link:"/"}]
    const account = {
            user_id: 35,
            egn: "3456275347",
            first_name: "TOm",
            mid_name: "second",
            last_name: "Doe",
            address: "sofia adress 1",
            date_of_birth: "1990-12-09T22:00:00.000Z",
            role: "user",
            secret_question: "secret querstion 1",
            secret_answer: "secret answer 1",
            email: "boiansinilkov@abv.bg"
        }

    const history = useHistory()
    const handleClick = () => {
        history.push('/account-info-form')
    }

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="account">
                <div className="page-content">
                    <div className="box">
                        <h1>Account Data</h1>
                        <div className="content-box">
                            <div className="form-content">
                                <div className="side">
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>User ID:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{account.user_id}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>First Name:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{account.first_name}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Mid Name:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{account.mid_name}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Last Name:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{account.last_name}</h2>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="side">
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Date of birth:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{account.date_of_birth}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Role:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{account.role}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Email:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{account.email}</h2>
                                        </div>
                                    </div>
                                    <div className="data-pair">
                                        <div className="name">
                                            <h2>Address:</h2>
                                        </div>
                                        <div className="value">
                                            <h2>{account.address}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-wrap">
                            <button className="submit-button" onClick={handleClick}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>  
        
     );
}
 
export default Account;