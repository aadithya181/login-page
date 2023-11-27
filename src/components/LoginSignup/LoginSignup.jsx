import React  from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useState } from 'react'


export const LoginSignup = () => {
    const [action, SetAction] = useState("Sign up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action ==="Login"?<div></div>:
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text"  placeholder='Name'/>
            </div> }
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email"  placeholder='email' />
            </div> 
            
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password"  placeholder='password'/>
            </div> 
            {action ==="sign up"?<div></div>:<div className="forgot-password">Lost-password? <span>Click here</span></div>}

            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={() =>{SetAction("sign up")}}>Sign up</div>
                <div className={action==="Sign up"?"submit gray":"submit"} onClick={() =>{SetAction("Login")}}>Login</div>
            </div>
        </div>
    </div>
  )
}
