import React from "react";
type UserAuth = {
    name: string | undefined,
    email: string | undefined
}

export const User: React.FC = () => {
    const [user, setUser ] = React.useState<UserAuth| null>(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
    const [userName, setUserName ] = React.useState<string | undefined>(undefined);
    const [userEmail, setUserEmail ] = React.useState<string | undefined>(undefined);
    const handleLogIn = () => {
        const newUser: UserAuth = {
            name: userName,
            email: userEmail
        }
        setUser(newUser);
        setIsLoggedIn(true);
    };
    const handleLogedOut = () => {
        setUser(null);
        setIsLoggedIn(false);
        setUserName(undefined);
        setUserEmail(undefined)
    };

    return(<div>
        {isLoggedIn && user? 
        <div>
            <div>User name is {user.name}</div>
            <button onClick={handleLogedOut}>Loggout</button>
        </div>
            : 
        <div>
            <h3>Wellcome, Please Log in</h3>
            <form onSubmit={handleLogIn}>
                <label> Name: 
                   <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </label>
                <label> Email:
                   <input type="email" value={userEmail} onChange= {(e) =>setUserEmail(e.target.value)} />
                </label><br/>
                <button type="submit">Log in</button>
            </form>
        </div>}

       
    </div>)
}