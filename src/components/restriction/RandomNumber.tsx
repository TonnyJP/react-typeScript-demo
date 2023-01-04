import React from "react"

type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isPositive?: never;
    isNegative: boolean;
    isZero?: never
}

type ZeroNumber = RandomNumberType & {
    isPositive?: never;
    isNegative?: never;
    isZero: boolean
}
type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

export const RandomNumber: React.FC<React.PropsWithChildren<RandomNumberProps>> = ({value, isNegative, isPositive, isZero}) => {
    
    return (
        <div>{value} {isPositive && 'positiv'} {isNegative && 'negativ'} {isZero && 'zero'}</div>
    )
}