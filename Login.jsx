import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <>
        <div className="login-page">
        <h1>Log in To Spotify</h1>
        <div className='google'>
        <button> <i class="fa-brands fa-google"></i>  Continue with  Google</button>
        </div>
        <div className='facebook'>
        <button><i class="fa-brands fa-facebook"></i>    Continue with  Facebook</button>
        </div>
        <div className='apple'>  
        <button><i class="fa-brands fa-apple"></i>    Continue with  Apple</button>
        </div>
        <div className='phon'>
        <button>    Continue with  Phone number</button>
        </div>
        <hr />
        <div className='mail'>
          <label htmlFor="text">Email Or Username:</label> <br />
          <input type="text" placeholder='Email Or Username' /><br />
          <label className='label1' htmlFor="text">Password:</label><br />
          <i class="fa-solid fa-eye-slash"></i>
          <input type="text" placeholder='Enter your Password' /> <br />
          <button>Login</button>
        </div>
        </div>
    </>
  )
}
