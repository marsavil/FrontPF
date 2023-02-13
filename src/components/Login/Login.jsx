import GoogleLogin from "react-google-login";
import { gapi } from 'gapi-script'
import {useEffect, useState} from "react";
function Login(){
    const clientID="476059488838-mdd84pqo9vvfmrqabsvqqm0cp7usitn0.apps.googleusercontent.com";
    const [user , setUser]=useState({});

    useEffect(()=>{
    const start=()=>{
            gapi.auth2.init({
                clientId:clientID,
            })
    }
    gapi.load("client:auth2", start)
    },[])
    const onSuccess=(response)=>{
    setUser(response.profileObj);
    }
    const onFailure=()=>{
        console.log("Something went wrong")
        }
    return(
        <div className="center">
                <GoogleLogin
                clientId={clientID}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_policy"}
                />
            <div className={user? "profile":"hidden"}>
                <img src={user.imageUrl} alt="" />
                <h3>{user.name}</h3>
            </div>
        </div>
    )
}

export default Login;