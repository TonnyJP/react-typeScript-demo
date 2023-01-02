import React from "react"
import { UserContext } from "./UserContext"

export const User: React.FC = () => {
    const userContext = React.useContext(UserContext);
    const handleLogin = () => {
            userContext.setUser({
                name:'Tonny',
                email: 'tonny@gmx.de'
            }); 
    }
    const handleLoggout = () => {
            userContext.setUser(null);
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLoggout}>Loggout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email} </div>
        </div>
    )
}