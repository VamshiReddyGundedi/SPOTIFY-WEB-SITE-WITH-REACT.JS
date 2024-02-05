import React from 'react'
import './Error.css';
import { Link } from 'react-router-dom';
export default function Error() {
  return (
    <div className='error'>
        <div>
            <img src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105403.jpg?size=626&ext=jpg&ga=GA1.1.1041476026.1698393044&semt=ais" alt="" width="550px" />
        </div>    
        <div className='btn'>
         <Link to='/'> <button  className='btn btn-info'>
            GOBACK
          </button></Link>
          <Link to='/'><button className='btn btn-info'>
            BACK TO HOME
          </button></Link>
        </div>    
    </div>
  )
}
