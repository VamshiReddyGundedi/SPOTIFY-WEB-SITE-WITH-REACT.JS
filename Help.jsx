import React from 'react'
import './Help.css'
export default function Help() {
  let Data = [ 
    {
      image:"",
      content:'acount'
    },
    {
      image:'',
      content:'premium'
    },
    {
      image:'',
      content:'payment'
    }
  ]
  return (
    <>

      <div className='help-main'> 
        <h1 className='help'>HOW CAN WE HELP YOU!</h1>
        <div className='spotify-help'>
          {
            Data.map((item)=>{
              return(
                <div className='acount'>
                  <img src={item.image} alt="" />
                  <h3>{item.content}</h3>

                </div>
              )
            })
          }
        </div>
        <div className='spotify-help1'>
          <div className='bugs'>
            <i class="fa-solid fa-bug"></i> streaming Bugs
          </div>
          <div className='music'>
            <i class="fa-solid fa-music"></i>Music Content
          </div>
          <div className='artist'>
            <i class="fa-solid fa-address-book"></i>Artist/Creater
          </div>
        </div>
      </div>
      <div className="questions">
        <h1 className='asked'>Frequently Asked Questions</h1>
        <div>
          <h3>How many devices can I use for my Resso account? <i class="fa-solid fa-arrow-right"></i></h3>
        </div>
        <hr />
        <div>
          <h3>What is Resso premium? <i class="fa-solid fa-arrow-right"></i></h3>
        </div>
        <hr />
        <div>
          <h3>How do I take advantage of the free trial of Resso premium? <i class="fa-solid fa-arrow-right"></i></h3>
        </div>
        <hr />
        <div>
          <h3>What happens after my free trial? <i class="fa-solid fa-arrow-right"></i></h3>
        </div>
        <hr />
        <div>
          <h3>What is Resso premium? <i class="fa-solid fa-arrow-right"></i></h3>
        </div>
      </div>
    </>
  )
}
