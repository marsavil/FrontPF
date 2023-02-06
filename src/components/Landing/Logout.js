import React from "react";
import {useAuth0} from  '@auth0/auth0-react'
export const Longout=()=>{
    const{longout} =useAuth0();
    return  <button onClick={()=>longout({returnTo:window.location.origin})}></button>
}