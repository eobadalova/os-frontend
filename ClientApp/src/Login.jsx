import React, { useState } from "react"

export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const formSubmit = (e) =>{
        e.preventDefault();
        console.log(username)
    }

    return (
        <div className="auth-form-container">
        <form className="login-form">
            <label for="username">Username</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} id="username" name="username" placeholder="johnsmith123"/>

            <label for="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" name="password" type="password" placeholder="********"/>

            <button>Log In</button>

        </form>

        <div className="loginSignUpContainer">
        <label id="signloginLabel" for="signupbtn">Are you new here?</label>
        <button className = "link-btn" name = "signupbtn" id="signupbtn">Sign Up</button>
        </div>

        
        </div>
    )
    
}