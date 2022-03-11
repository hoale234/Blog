import React from 'react'
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({setInAuth}) {


    let navigate = useNavigate();

    const sigInWithGoogle =() =>{
        signInWithPopup(auth, provider).then((result) =>{
            localStorage.setItem("isAuth", true);
            setInAuth(true);
            navigate("/");
        });
    };
  return (
    <div className="loginPage">
        <p>
            Sign In With Google to Continue
        </p>
        <button className="login-with-google-btn" onClick={sigInWithGoogle}>
            Sign in with Google
        </button>
    </div>
  )
}

export default Login