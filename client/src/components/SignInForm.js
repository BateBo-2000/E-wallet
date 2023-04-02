import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const SignInForm = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/account-info-form')
    }
    return ( 
        <div className="sign-in">
            <div className="page-content">
                <div className="box">
                    <div className="title">
                        <h1>Register</h1>
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
                        <div className="form-pair">
                            <label>Confirm Password</label>
                            <input type="password" />
                        </div>
                        <div className="button-wrap">
                            <button className="submit-button" onClick={handleClick}>Next</button>
                        </div>
                        <div className="link">
                            <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    );
}
 
export default SignInForm;