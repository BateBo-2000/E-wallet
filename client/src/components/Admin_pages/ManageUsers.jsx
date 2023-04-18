import NavBar from "../NavBar";
import Footer from "../Footer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const ManageUsers = () => {
    React.useEffect(() => { 
        // set window title
        document.title = 'Menage Users'; 
    }, []);

    const NavElements = [
        {id:1,name:"Back" ,link:"/admin-menu" },
    ]

    const [error, setError] = useState(null)
    const [users, setUsers] = useState(null)
    const [column, setColumn] = useState('user_id')
    const [condition, setCondition] = useState('')

    const fetchUsers = (table,condition) => {
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

    const fetchDeleteUser = (id) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/admin/deleteUser?deleteUser_id=${id}`, { 
            method: 'DELETE',
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
        .then(data => {
            if(data?.affectedRows === 1){
                setError('SUCCESS')
                fetchUsers('users', `${column} = '${condition}'`)
            }else{
                if(data?.message){
                    setError(data.message)
                }else{
                    setError(data ? data : 'Someting went wrong!')
                }
            }
            
        })
        .catch(err=> setError(err?.message ? err?.message :'Something went worng!'))
    }


    useEffect(()=>{
        fetchUsers('users', '1 LIMIT 50')
    },[])

    const handleSearch = (e)=> {
        e.preventDefault()
        setError(null)
        setUsers(null)
        fetchUsers('users', `${column} = '${condition}'`)
    }
    const handleDelete =  (e,id)=> {
        e.preventDefault()
        fetchDeleteUser(id)
    }

    return (<div>
        <NavBar elements={NavElements}/>
        <div className="admin-menu">  
            <div className="page-content">
                <div className="box">
                    <div className="title">
                        <h2>Search Users</h2>
                    </div>
                    <div className="input-wrap">
                        <form className="form">
                            <div className="form-pair">
                                <label>{column}</label>
                                <input type="text"  value={condition} required onChange={(e)=> {setCondition(e.target.value)}} />
                            </div>
                            <div className="form-pair">
                                <label>Search By</label>
                                <select className="selection" value={column} onChange={(e)=>setColumn(e.target.value)}>
                                    <option value='user_id' >User Id</option>
                                    <option value='egn' >Egn</option>
                                    <option value='first_name' >First Name</option>
                                    <option value='mid_name' >Middle Name</option>
                                    <option value='last_name' >Last Name</option>
                                    <option value='address' >Address</option>
                                    <option value='date_of_birth' >Date of birth</option>
                                    <option value='role' >Role</option>
                                    <option value='secret_question' >Secret question</option>
                                    <option value='secret_answer' >Sectret answer</option>
                                    <option value='email' >Email</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="button-wrap">
                        <button className="submit-button" onClick={handleSearch}>Search</button>
                    </div>
                    <div className="title">
                        <h2>Results</h2>
                    </div>
                    {users && users[0] && users.map(user=>(
                        <div className="tran" key={user.user_id}>
                            <div className="content-box">
                                <div className="MU">
                                    <div className="side">
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>User ID:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.user_id}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Egn:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.egn}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>First Name:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.first_name}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Mid Name:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.mid_name}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Last Name:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.last_name}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Secret Question:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.secret_question}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side">
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Date of birth:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.date_of_birth.split('T')[0]}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Role:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.role}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Email:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.email}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Address:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.address}</h2>
                                            </div>
                                        </div>
                                        <div className="data-pair">
                                            <div className="name">
                                                <h2>Secret Question:</h2>
                                            </div>
                                            <div className="value">
                                                <h2>{user.secret_answer}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-wrap">
                                    <button className="submit-button" onClick={(e)=>handleDelete(e,user.user_id)}>Delete</button>
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
 
export default ManageUsers;