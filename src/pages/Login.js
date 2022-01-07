import React from "react";
import {auth, provider} from "../firebase.config";
 
const Login = () => {


  const Singin = () => {
    
    auth()
      .singInWithPopup(provider)
      .then((res) => {console.log(res)})
      .catch((error) => {console.log(error)});
  };


  return (
    <div>
      <button onClick={Singin}>Sing in with Google</button>
    </div>
  );
};

export default Login;
