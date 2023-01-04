import React from "react"

type ButtonProps ={
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const CustomButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({variant, children, ...rest}) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}