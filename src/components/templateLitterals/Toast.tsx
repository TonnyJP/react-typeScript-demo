import React from "react";

type HorizonzalPostition = 'left' | 'right' | 'center';
type VerticalPosition = 'top' | 'bottom' | 'center';
type ToastProps = {
    position: `${HorizonzalPostition}-${VerticalPosition}`
}

export const Toast: React.FC<React.PropsWithChildren<ToastProps>> = ({position}) => {
    return <div>Toast Notification Position - {position}</div>
}