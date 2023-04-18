import NavBar from "../NavBar";
import Footer from "../Footer";
import { useState } from "react";
import React from "react";
const SendMail = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'Send Email'
    }, []);

    const NavElements = [
        {id:1,name:"Back" ,link:"/admin-menu"},
    ]

    const [error, setError]= useState(null)
    const [reciever, setReciever] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')


    const fetchSendMail = (reciever, title, text) => {

        fetch(`${process.env.REACT_APP_BASE_URL}/admin/sendMail`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "reciever":reciever,
                "title":title,
                "text":text
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
            if(data?.message){
                setError(data.message)
            }else{
                setError(data ? data : 'Something wen wrong')
            }   
        })
        .catch(err => {
            console.error(err);
        });
    }

    const handleSubmit = () => {
        setError(null)
        fetchSendMail(reciever, title, text)  
    }

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="send-mail"> {/*reusing the transation template*/}
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Add Currency</h2>
                        </div>
                        <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>Receiver</label>
                                    <input type="text"  value={reciever} required onChange={(e)=> {setReciever(e.target.value)}} />
                                </div>
                            </form>
                        </div>
                        <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>Title</label>
                                    <input type="text"  value={title} required onChange={(e)=> {setTitle(e.target.value)}} />
                                </div>
                            </form>
                        </div>
                        <div className="input-wrap">
                            <form className="form">
                                <div className="form-pair">
                                    <label>Text</label>
                                    <textarea value={text} required onChange={(e) => {setText(e.target.value)}} />
                                </div>
                            </form>
                        </div>
                        <div className="button-wrap">
                            <button className="submit-button" onClick={handleSubmit}>Send</button>
                        </div>
                        {error && (<div className="error">
                            <h2>{error}</h2>
                        </div>)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default SendMail;