import React from 'react'
import { useAuth } from './auth'
import { useHistory } from 'react-router-dom'

function AdminAuth({children}) {
    const auth = useAuth()
    const history = useHistory()

    //you can proceed only if your role is admin
    if(auth?.user === 'admin'){
        return <React.Fragment>{children}</React.Fragment>
    }else{
        history.push('/login')
    }
    
}

export default AdminAuth