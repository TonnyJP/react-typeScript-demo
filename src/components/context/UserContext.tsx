import React from "react"

export type AuthUser = {
    name: string,
    email: string
}
type UserContextType= {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const UserContext = React.createContext<UserContextType>({} as UserContextType);

export const UserContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const [user, setUser] = React.useState<AuthUser| null>(null);

    return( <UserContext.Provider value={{user, setUser}}> {children} </UserContext.Provider>)
}