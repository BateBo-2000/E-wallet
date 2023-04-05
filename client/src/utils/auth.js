import { useState, createContext, useContext} from "react"

export const AuthContext = createContext(null)

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    
    const Login = user => {
        setUser({user_id: 4, role: 'user'})
    }
    const Logout = () => {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, Login, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}