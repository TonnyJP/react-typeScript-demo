import React from "react";

type ListProps<T> = {
    items: T,
    onClick: (value: T) => void
}

export const List:React.FC<React.PropsWithChildren<ListProps<{}>>> = ({items, onClick}) => {
    return(
        <div>
            <h2>List of items</h2>
            {items instanceof Array? 
             items.map((item, index) => {
                return(
                    <div key={index} onClick= {() => onClick(item)}> {item.fname}, {item.lname} </div>
                )
            }): null}
        </div>
    )
}