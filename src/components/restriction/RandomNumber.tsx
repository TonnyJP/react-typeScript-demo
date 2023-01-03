import React from "react"

type RandomNumberProps ={
    value: number,
    isPositiv?: boolean,
    isNegativ?: boolean,
    isZero?: boolean
}

export const RandomNumber: React.FC<React.PropsWithChildren<RandomNumberProps>> = ({value, isNegativ, isPositiv, isZero}) => {
    
    return (
        <div>{value} {isPositiv && 'positiv'} {isNegativ && 'negativ'} {isZero && 'zero'}</div>
    )
}