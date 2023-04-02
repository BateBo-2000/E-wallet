import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const AccountInfoForm = () => {
    const history = useHistory();
    const handleClick = () =>{
        history.push('/')
    }

    return ( 
        <div>
            <NavBar/>
            <div className="account-info-form">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Fill in your information</h2>
                        </div>
                        <form className="form">
                            <div className="form-content">
                                <div className="side">
                                    <div className="form-pair">
                                        <label>Egn</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="form-pair">
                                        <label>First name</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="form-pair">
                                        <label>Middle name</label>
                                        <label htmlFor="midleN"></label>
                                        <input type="text" name="midleN"/>
                                    </div>
                                    <div className="form-pair">
                                        <label>Last name</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="form-pair">
                                        <label>Address</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="side">
                                    <div className="form-pair">
                                        <label>Date of birth</label>
                                        <input type="date"/>
                                    </div>
                                    <div className="form-pair">
                                        <label>Secret question</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="form-pair">
                                        <label>Secret question</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="form-pair">
                                        <label>Secret answer</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="form-pair">
                                        <label>Email</label>
                                        <input type="email"/>
                                    </div>
                                </div>   
                            </div> 
                            <div className="checkbox-wrap">
                                <input type="checkbox" className="checkbox" /> I have read and agree  <Link to="/terms">terms and conditions</Link> <br />
                            </div>
                            <div className="button-wrap">
                                <button className="submit-button" onClick={handleClick}>Submit</button>
                            </div>
                            <div className="link">
                                <Link to="/sign-in" >back</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>  
        
     );
}
 
export default AccountInfoForm;