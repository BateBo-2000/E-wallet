import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const LoginForm = () => {
    const history = useHistory();
    const handleClick = () =>{
        history.push('/')
    }
    return ( 
        <div>
            <NavBar/>
            <div className="login">
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h1>Login</h1>
                        </div>
                        <form className="form">
                            <div className="form-pair">
                                <label>Username</label>
                                <input type="text" />
                            </div>
                            <div className="form-pair">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div className="button-wrap">
                                <button className="submit-button" onClick={handleClick}>Login</button>
                            </div>
                            <div className="link">
                                <Link to="/sign-in">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
     );
}
 
export default LoginForm;