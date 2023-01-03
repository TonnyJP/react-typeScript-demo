import React from "react"

export type ProfilePropsType = {
    name: string
}
export const Profile: React.FC<React.PropsWithChildren<ProfilePropsType>> = ({name}) => {
    return <div>Private Profile component. Name is {name}</div>
}