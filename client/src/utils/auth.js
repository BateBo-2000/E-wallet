import { useState, createContext, useContext} from "react"

export const AuthContext = createContext(null)

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)

    const decodePayload = () => {
        const token = sessionStorage.getItem('e-w_token');
        let userRole = null;

        // if the token exeists
        if(token != null) {
            try {
                // get payload only
                const [, payload, ] = token.split('.');
                // try to decode JSON payload
                const decodedPayload = JSON.parse(atob(payload));
                // set state to actual state
                userRole = decodedPayload.role;
            } catch {}
        }
        return userRole
    }
    
    const Login = () => {
        setUser(decodePayload())
    }
    const Logout = () => {
        setUser(null)
        sessionStorage.clear()
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

