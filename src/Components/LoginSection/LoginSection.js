import React, {useState} from 'react'
import { assets } from '../../assets/assets';
import '../LoginSection/Login.css'

const LoginSection = ({setShowLogin}) => {
    const[curState, setCurState]=useState("Login");
  return (
    <div className='login-popup'>
        <form className='login-container'>
            <div className='login-popup-title'>
                <h2>{curState}</h2>
                <img src={assets.cross_icon} alt='' onClick={()=>setShowLogin(false)} />
            </div>
            <div className='login-input-detail'>
                {curState==="Login" ? <></> :  <input type='text' placeholder='Enter your name' required />}
                <input type='email' placeholder='Enter your email' required />
                <input type='password' placeholder='Enter the password' required/>
            </div>
            <button>{curState==="Sign Up" ? "Create a Account" : "Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required/>
                <p className='login-policy'>By continuing, I agree to terms of rules and privacy policy</p>
                {curState === "Login" ? <p>Create a new account ? <span  onClick={()=>setCurState("Sign Up")} >Click here</span></p> :   <p>Already have a account ? <span  onClick={()=>setCurState("Login")} >Login here</span></p> }
            </div>
        </form>
    </div>
  )
}

export default LoginSection