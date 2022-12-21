import React from "react"

type StatusType = {
    status: "loading" | "success" | "error"
}
export const Status: React.FC<React.PropsWithChildren<StatusType>> = ({status}) => {
    let message: string = "";
    if(status === "loading"){
       message ='Loading ...'
    }else if(status === "success"){
        message = 'Data fetched successfully!'
    }else if (status === "error"){
        message = "Error fetching data!"
    }else{
        message= "Please provide the rigth data"
    }
    return (<>
    <h2> {message}</h2>
    </>)
}