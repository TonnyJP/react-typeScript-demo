import React from "react"

type ButtonProps = {
    handleClick: (event: React.MouseEvent) => void
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({handleClick}) => {

    return <button onClick={handleClick}>Click</button>
}