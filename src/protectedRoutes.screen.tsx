import React from "react"
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute({isAuth:isAuth, component:Component, ...rest}:any){
    return(
        <>
        <Route {...rest} render={(props)=>{
            if (isAuth) {
                return <Component/> 
            }else{
                return <Redirect to={{pathname: "/login" , state:{from:props.location}}}/>
            }
        }}/>
        </>
    )
}
