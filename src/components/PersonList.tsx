import React from "react"

interface IPersonne{
    lname: string, 
    fname: string
}
export interface IProps{
    personList: IPersonne[]
}

export const PersonList: React.FC<React.PropsWithChildren<IProps>> = ({personList}) => {
    return <div>
        {personList.map((person) => {
          return <h2>{person.lname} {person.fname}</h2>
        })}
    </div>
}