import React from "react"

export const Heading : React.FC<React.PropsWithChildren> = ({children}) => {

    return <h2>{children}</h2>
}