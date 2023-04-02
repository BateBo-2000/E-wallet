import { useHistory } from "react-router-dom";
const SignInForm = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/account-info-form')
    }
    return ( 
        <div className="signin">
            <h2>SignIn</h2>
            <form>
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <label>Confirm Password</label>
                <input type="password" />
                <button onClick={handleClick}>Perceed</button>
            </form>
            
        </div> 
    );
}
 
export default SignInForm;