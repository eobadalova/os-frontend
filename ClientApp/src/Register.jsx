
import React, { useState } from "react"

export const Register = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [username, setUsername] = useState('');

    const formSubmit = (e) =>{
        e.preventDefault();
        console.log(email)
    }


    return (
        <div className="auth-form-container">
        <form className="login-form">
            <label for="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" placeholder="youremail@gmail.com"/>

            <label for="username">Username</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} id="username" name="username" type="username" placeholder="johnsmith123"/>

            <label for="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" name="password" type="password" placeholder="********"/>

            <label for="passwordRepeat">Repeat Password</label>
            <input value={passwordRepeat} onChange={(e)=>setPasswordRepeat(e.target.value)} id="passwordRepeat" name="passwordRepeat" type="password" placeholder="********"/>

            <button>Sign Up</button>

        </form>


        <div className="loginSignUpContainer">

        <label for="signupbtn">Already have an account?</label>
        <button className = "link-btn" name = "signupbtn" id="signupbtn">Log In</button>
        </div>


        </div>
        )
    
}