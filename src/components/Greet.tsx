import React from "react"

type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}
export const Greet : React.FC<React.PropsWithChildren<GreetProps>> = ({name, messageCount, isLoggedIn}) => {
    return(<div>
       { isLoggedIn ? <h2>{`Welcome ${name}! You have ${messageCount} unread messages`}</h2> : <h2>Welcome guest</h2>}
    </div>)
}