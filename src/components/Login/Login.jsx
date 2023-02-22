import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../Redux/actions";
import { useHistory } from "react-router-dom";

import "./Login.css"


function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const clientID =
    "476059488838-mdd84pqo9vvfmrqabsvqqm0cp7usitn0.apps.googleusercontent.com";

  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {}
  );
  console.log(sessionStorage);

  useEffect(() => {
    const start = () => {
      gapi.auth2
        .init({
          clientId: clientID,
        })
        .then(() => {
          const user = JSON.parse(sessionStorage.getItem("user"));
          if (user) {
            setUser(user);
            const input = {
              name: user.name,
              isAdmin: false,
              email: user.email,
              password: user.googleId,
              image: user.imageUrl,
            };
            dispatch(registerUser(input));
          }
        });
    };
    gapi.load("client:auth2", start);
  }, [clientID, dispatch]);
 console.log("esto es gapi",gapi)
  const onSuccess = (response) => {
    console.log(response);
    sessionStorage.setItem("user", JSON.stringify(response.profileObj));
    setUser(response.profileObj);
    history.push("/home")
  };
  const onFailure = () => {
    console.log("Something went wrong");
  };

  return (
    <div className="center">
      <GoogleLogin
        clientId={clientID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_policy"}
      />
      <div className={user ? "profile" : "hidden"}>
        <img className="profileImg"src={user.imageUrl} alt="" width={"50px"} />
        <h3>{user.name}</h3>
      </div>
    </div>
  );
}

export default Login;
