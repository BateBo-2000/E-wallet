import React from "react";
import { useState } from "react";
const UpdateBalance = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'E-wallet Balance:'
    }, []);

    const NavElements = [
        {id:1,name:"Back" ,link:"/admin-menu" },
    ]

    const [error, setError] = useState(null)
    const [balances, setBalances] = useState(null)
    const [userId, setUserId] = useState(0)
    const [condition, setCondition] = useState('')

    return ( <h2>update balance</h2> );
}
 
export default UpdateBalance;