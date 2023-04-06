import React from 'react'
import { useAuth } from './auth'
import { useHistory } from 'react-router-dom'

function RequireAuth({children}) {
    const auth = useAuth()
    const history = useHistory()

    // basically if the user role isnt set (haven't logged in) this copmonent is redirected to login
    if(!auth.user){
        history.push('/login')
    }
    return <React.Fragment>{children}</React.Fragment>
}

export default RequireAuth