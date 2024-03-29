import NavBar from "./NavBar";
import Footer from "./Footer";
import ListBalance from "./ListBalance";
import { useAuth } from "../utils/auth";
import { useEffect, useState } from "react";
import React from "react";
const Home = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Home'; 
    }, []);

    const auth = useAuth()
    const NavElements = [
        {id:3,name:"Account" ,link:"/account" },
        {id:4,name:"Stats" ,link:"/stats" },
        {id:5,name:"Reminders" ,link:"/reminders" },
        {id:6,name:"Exchange rates" ,link:"/exchange-rates"}, 
        {id:7,name:"Log out" ,link:"/login", onClickF: ()=> {auth.Logout()}}
    ]
    
    if(auth.user === 'admin'){
        NavElements.unshift({id:1,name:"Admin" ,link:"/admin-menu"})
    }
    

    const [error, setError] = useState(null)
    const [balances, setBalances] = useState(null)

    const fetchBalances = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/balance`, { 
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`
            }
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else{
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
        .then(data => setBalances(data))
        .catch(err=> setError('Something went worng!'))
    }

    useEffect(()=>{
        fetchBalances()
    },[])

    return ( 
        <div>
            <NavBar elements={NavElements}/>
            <div className="home">  
                <div className="page-content">
                    <div className="box">
                        <div className="title">
                            <h2>Home</h2>
                            {balances && (<ListBalance balances={balances}/>)}
                            {error && (<div className="error">
                                <h2>{error}</h2>
                            </div>)}
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>  
     );
    
}
 
export default Home;