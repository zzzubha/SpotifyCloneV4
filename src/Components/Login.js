import React from 'react'
import "../Styles/login.css"
import logo from "../Assets/logo.jpg"
import { loginUrl } from '../Spotify'

function Login() {
  return (
    <div className='login'>
        <img src ={logo} alt="Logo"/>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login