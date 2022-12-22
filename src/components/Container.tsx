import React from "react"

type ContainerProps = {
    styles: React.CSSProperties
}
export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({styles}) => {
    return(
        <div style={styles}>
            Text content goes here
        </div>
    )
}