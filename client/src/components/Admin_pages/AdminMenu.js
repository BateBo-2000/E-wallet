import NavBar from "../NavBar";
import Footer from "../Footer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const AdminMenu = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'Administration'; 
    }, []);

    const NavElements = [
        {id:1,name:"Send Mail" ,link:"/send-mail" },
        {id:2,name:"Update Role" ,link:"/update-role" },
        {id:3,name:"Update Balance" ,link:"/update-balance" },
        {id:4,name:"Manage User" ,link:"/manage-user"}, 
        {id:5,name:"Currency" ,link:"/currency"}, 
        {id:6,name:"Custom Query" ,link:"/custom-query"}, 
        {id:7,name:"Home" ,link:"/" },
    ]

    const [error, setError] = useState(null)
    const [changes, setChages]= useState(null)


    const fetchChanges = (table,condition) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/admin/getCustom?table=${table}&condition=${condition}`, { 
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
            }
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else{
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
        .then(data => setChages(data))
        .catch(err=> setError(err?.message ? err?.message :'Something went worng!'))
    }

    useEffect(()=>{
        fetchChanges('admin_changes',1)
    },[])

    return (<div>
        <NavBar elements={NavElements}/>
        <div className="admin-menu">  
            <div className="page-content">
                <div className="box">
                    <div className="title">
                        <h2>Aministrator changes</h2>
                        
                    </div>
                    {changes && changes.map((change) => (
                        <div className="tran" key={change.admin_changes_id}>
                            <div className="content-box">
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>User ID:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{change.user_id}</h2>
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Change:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{change.change}</h2>
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Timestamp:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{change.datetime_done.split('T')[0]} Time: {change.datetime_done.split('T')[1].split('.')[0]}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!error && !changes && (
                        <div className="title">
                            <h2>Loading ... </h2>
                        </div>
                    )}
                    {error && 
                            <div className="error">
                                <h2>{error}</h2>
                            </div> 
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </div>);
}
 
export default AdminMenu;