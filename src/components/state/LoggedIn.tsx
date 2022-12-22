import React from "react";

export const LoggedIN: React.FC = () => {
    const handleLogIn = () => {
        setIsLoggedIn(true);
    };
    const handleLogedOut = () => {
        setIsLoggedIn(false);
    };
    const [isLoggedIn, setIsLoggedIn ] = React.useState<boolean>(false);

    return(<div>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogedOut}>Loggout</button>
        <div>User is {isLoggedIn? "logged in": "logged out"}</div>
    </div>)
}