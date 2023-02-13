import GoogleLogin from "react-google-login";
import { gapi } from 'gapi-script'
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../Redux/actions";

function Login(){
    const dispatch = useDispatch()
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
        console.log(response)
    setUser(response.profileObj);
    }
    const input = {
        name: user.name,
        isAdmin: true, 
        email: user.email, 
        password: user.googleId
    }
    console.log(input)

    if(input.name){
        dispatch(registerUser(input))
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
                <img src={user.imageUrl} alt="" width={"50px"} />
                <h3>{user.name}</h3>
            </div>
        </div>
    )
}

export default Login;