import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";

import React from "react";
const AccountInfoForm = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'User information form'; 
    }, []);

    const history = useHistory();

    const [error, setError] = useState('')
    //gets the elements from the last page
    const user = sessionStorage.getItem('username') 
    const pass = sessionStorage.getItem('password')

    const [egn, setEgn] = useState('')
    const [firstName, setFirstName] = useState('')
    const [midName, setMidName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAdress] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [SQuestion, setSQuestion] = useState('')
    const [SAnswer, setSAnswer] = useState('')
    const [email, setEmail] = useState ('')
    const [isChecked, setIsChecked] = useState(false)

    //if everything is allright returns true
    const chechData = () => {
        if(firstName.length<3 || firstName.length>45) return setError('First Name must be 3 to 45 symbols!')
        if(lastName.length<3 || lastName.length>45) return setError('Last Name must be 3 to 45 symbols!')
        if(midName.length<3 || midName.length>45) return setError('Middle Name must be 3 to 45 symbols!')
        if(egn.length!==10) return setError('Incorrect egn!')
        if(address.length<15 || address.length>250) return setError('Address must be 15 to 250 symbols!')
        if(SQuestion.length<15 || SQuestion.length>100) return setError('Secret Question must be 15 to 100 symbols!')
        if(SAnswer.length<15 || SAnswer.length>45) return setError('Secret Question must be 15 to 45 symbols!')
        if(!isValidEmail(email)) return setError('Email is invalid!')
        if(!isChecked) return  setError('You have to agree the trems an conditions')
        if(user == null || pass == null) history.push('/sign-in')
        return true;
    }

    //researched regex just for this....
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }


    const Register = (user) => {
        fetch(`http://localhost:5000/login/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username":`${user.username}`,
                "password":`${user.password}`,
                "egn":`${user.egn}`,
                "first_name":`${user.firstName}`,
                "mid_name":`${user.midName}`,
                "last_name":`${user.lastName}`,
                "address":`${user.address}`,
                "date_of_birth":`${user.dateOfBirth}`,
                "secret_question":`${user.secret_question}`,
                "secret_answer":`${user.secret_answer}`,
                "email":`${user.email}`
            })
        })
        .then(res => {
            if(res.ok){
                //redirect to login if res is ok after 2 seconds
                console.log('res is ok')
                setTimeout(Redirect, 2000) 
            }else{
                return res.json()
            }
        })  
        //spent like 2 hours to debug this line
        //if there is no error probably everything is fine
        .then(err => setError(err ? err : 'Register done! Going Login!'))
        //just checks the register
        .catch(err => {
            setError('Something went wrong! ' +err)
        });

    }

    const Redirect = () => {history.push('/login')}

    const handleClick = (e) =>{
        e.preventDefault()
        if(!chechData()) return error
        setError(null)
        const userData = {
            username:user,
            password: pass, 
            egn:egn,
            firstName: firstName,
            midName: midName,
            lastName: lastName,
            address: address,
            dateOfBirth: dateOfBirth,
            secret_question: SQuestion,
            secret_answer: SAnswer,
            email: email
        }
        Register(userData)

        //clears the storage after everything is done
        sessionStorage.clear() 
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
                                        <input type="text" value={egn} required onChange={(e)=> {setEgn(e.target.value)}} />
                                    </div>
                                    <div className="form-pair">
                                        <label>First name</label>
                                        <input type="text" value={firstName} required onChange={(e)=> {setFirstName(e.target.value)}} />
                                    </div>
                                    <div className="form-pair">
                                        <label>Middle name</label>
                                        <label htmlFor="midleN"></label>
                                        <input type="text" name="midleN" value={midName} required onChange={(e)=> {setMidName(e.target.value)}} />
                                    </div>
                                    <div className="form-pair">
                                        <label>Last name</label>
                                        <input type="text" value={lastName} required onChange={(e)=> {setLastName(e.target.value)}} />
                                    </div>
                                    <div className="form-pair">
                                        <label>Address</label>
                                        <input type="text" value={address} required onChange={(e)=> {setAdress(e.target.value)}} />
                                    </div>
                                </div>
                                <div className="side">
                                    <div className="form-pair">
                                        <label>Date Of Birth</label>
                                        <input type="date" value={dateOfBirth} required onChange={(e)=> {setDateOfBirth(e.target.value)}} />
                                    </div>
                                    <div className="form-pair">
                                        <label>Secret question</label>
                                        <input type="text" value={SQuestion} required onChange={(e)=> {setSQuestion(e.target.value)}} />
                                    </div>
                                    <div className="form-pair">
                                        <label>Secret answer</label>
                                        <input type="text" value={SAnswer} required onChange={(e)=> {setSAnswer(e.target.value)}} />
                                    </div>
                                    <div className="form-pair">
                                        <label>Email</label>
                                        <input type="email" value={email} required onChange={(e)=> {setEmail(e.target.value)}} />
                                    </div>
                                </div>   
                            </div> 
                            <div className="checkbox-wrap">
                                <input type="checkbox" className="checkbox" value={isChecked} onChange={(e)=> {setIsChecked(e.target.checked)}}/> I have read and agree  <Link to="/terms">terms and conditions</Link> <br />
                            </div>
                            <div className="button-wrap">
                                <button className="submit-button" onClick={handleClick}>Submit</button>
                            </div>
                            <div className="link">
                                <Link to="/sign-in" >back</Link>
                            </div>
                            {error && (<div className="error">
                                <h2>{error}</h2>
                            </div>)}
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>  
        
     );
}
 
export default AccountInfoForm;