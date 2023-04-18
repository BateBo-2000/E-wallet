import NavBar from "../NavBar";
import Footer from "../Footer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const UpdateRole = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'Update Role'; 
    }, []);

    const NavElements = [
        {id:1,name:"Back" ,link:"/admin-menu" },
    ]
    const [error, setError] = useState(null)
    const [users, setUsers]= useState(null)
    const [adminId, setAdminId]= useState(0)
    const [role, setRole]= useState('user')

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
        .then(data => setUsers(data))
        .catch(err=> setError(err?.message ? err?.message :'Something went worng!'))
    }
    
    useEffect(()=>{
        setError(null)

        fetchChanges('login_data',"userRole = 'admin' order by userRole")
    },[])


    const fetchPatchUserRole = (id, role) =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/admin/updateRole`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('e-w_token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "chnage_user_id":id,
                "chnge_role":role
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
            console.log(data)
            if(data?.message === "SUCCESS"){
                fetchChanges('login_data',"userRole = 'admin' order by userRole")
                setAdminId(0)
            }else{
                setError(data ? data : 'Something went worng!')
            }
        })
        .catch(err=> setError(err?.message ? err?.meassge : "Something went wrong"))
    }

    const handleSubmit = () => {
       fetchPatchUserRole(adminId, role)
    }

    return (<div>
        <NavBar elements={NavElements}/>
        <div className="admin-menu">  
            <div className="page-content">
                <div className="box">
                    <div className="title">
                        <h2>Change Role</h2>
                    </div>
                    <div className="input-wrap">
                        <form className="form">
                            <div className="form-pair">
                                <label>User Id</label>
                                <input type="number"  value={adminId} required onChange={(e)=> {setAdminId(e.target.value)}} />
                            </div>
                            <div className="form-pair">
                                <label>Change role to</label>
                                <select className="selection" value={role} onChange={(e)=>setRole(e.target.value)}>
                                    <option value='user' >User</option>
                                    <option value='admin' >Admin</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    
                    <div className="button-wrap">
                            <button className="submit-button" onClick={handleSubmit}>Change</button>
                    </div>
                    <div className="title">
                        <h2>Admins</h2>
                    </div>
                    {users && users.map((admin) => (
                        <div className="tran" key={admin.login_data_id}>
                            <div className="content-box">
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Admin user ID:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{admin.user_id}</h2>
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Username</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{admin.username}</h2>
                                    </div>
                                </div>
                                <div className="data-pair">
                                    <div className="name">
                                        <h2>Role:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{admin.userRole}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!error && !users && (
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
 
export default UpdateRole;