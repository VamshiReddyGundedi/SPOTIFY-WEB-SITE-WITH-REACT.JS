import React from 'react'
import './Download.css'
export default function Download() {
  return (
    <>
      <div className='download-page'>
      <div className='download'>
        <img className='laptop' src="	https://www-growth.scdn.co/static/download/laptop.svg" alt="" />
        <img  className='circle' src="https://www-growth.scdn.co/static/download/green-circle.svg" alt="" />
        <img className='success' src="https://www-growth.scdn.co/static/download/green-success-check.svg" alt="" />
      </div>
      <div className='microsoft'>
        <h1>Download Spotify</h1>
        <p>Play millions of songs and podcasts on your device.</p>
        <button><h2> <i class="fa-brands fa-microsoft"></i>       Get it from <br />  Microsoft</h2></button>
      </div>
      <div className='link'>
        <a href="text">Download directly from spotify</a>
      </div>
      </div>
    </>
  )
}
