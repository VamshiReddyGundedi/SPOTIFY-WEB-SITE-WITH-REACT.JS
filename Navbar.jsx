import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './App.css'
export default function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}} className='Nav'>
    <div className='spotify-logo'>
      <Link to="/">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" width="180px" height="50px" />
      </Link>
    </div>
    <div style={{marginTop:"35px"}}>
        <ul style={{display:"flex",}}>
            <li className='link'><NavLink to="/" className='spo-link'>HOME</NavLink></li>
            <li className='link'><NavLink to="/Search" className='spo-link'>SEARCH</NavLink></li>
            <li className='link'><NavLink to="/Download" className='spo-link'>DOWNLOAD</NavLink></li>
            <li className='link'><NavLink to="/Help" className='spo-link'>HELP</NavLink></li>
            <li className='link'><NavLink to="/Login" className='spo-link'>LOGIN</NavLink></li>
        </ul>
    </div>
    </div>
  )
}
