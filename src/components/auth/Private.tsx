import React from "react";
import { Login } from "./Login";
import { ProfilePropsType } from "./Profile";
type PrivateType = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfilePropsType>
}

export const Private : React.FC<React.PropsWithChildren<PrivateType>> = ({ isLoggedIn, component: Component}) => {
    if(isLoggedIn){
        return <Component name="Tonny J"/>
    }else{
        return <Login />
    }
}