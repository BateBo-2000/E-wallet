import { Link } from "react-router-dom";
const LoginForm = () => {
    return ( 
        <div className="login">
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
                    <div className="login-button">
                        <button className="submit-button">Login</button>
                    </div>
                    <div className="link">
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default LoginForm;