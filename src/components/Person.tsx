import React from "react"

interface IProps{
    lname: string,
    fname: string
}

export const Person : React.FC<React.PropsWithChildren<IProps>> = ({lname, fname}) => {
    return <div>{lname} {fname}</div>
}