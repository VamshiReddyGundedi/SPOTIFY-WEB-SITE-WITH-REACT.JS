import React, { useState } from 'react'
import './Search.css'
let Data = [
  {
    "img": "https://marketplace.canva.com/EAFgngzIptw/1/0/1600w/canva-black-red-yellow-dark-fire-heart-album-cover-1zF2DBwq_dA.jpg",
    "title": "Passionate"
  },
  {
    "img": "https://marketplace.canva.com/EAFkEJoq19M/2/0/1600w/canva-dark-minimalist-simple-bold-photo-collage-album-cover-H_MARvIbjE4.jpg",
    "title": "High"
  },
  {
    "img": "https://th.bing.com/th/id/OIP.qf9Ico5Et-pg-S7-D9pUuQHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3",
    "title": "Sad Dreams"
  },
  {
    "img": "https://th.bing.com/th/id/OIP.cixEtsEbWIEAjniy5EkIvAHaHa?pid=ImgDet&w=161&h=161&c=7",
    "title": "MoonLight"
  },
  {
    "img": "https://th.bing.com/th/id/OIP.3AJ-kzBmwiRKJyu1apcucQHaHa?pid=ImgDet&w=161&h=161&c=7",
    "title": "Broken"
  },
  {
    "img": "https://th.bing.com/th/id/OIP.Jw6XiA1w3PqGkeR1rsMGxAHaHa?pid=ImgDet&w=161&h=161&c=7",
    "title": "1980's"
  },
  {
    "img": "https://marketplace.canva.com/EAFJqnCCYXk/1/0/1600w/canva-black-and-blue-music-playlist-album-cover-mHIJOBN4RkY.jpg",
    "title": "Cool Kids"
  },
  {
    "img": "https://marketplace.canva.com/EAFlSVEYdXA/1/0/1600w/canva-black-neon-bubble-simple-minimalist-typographic-r%26b-album-cover-yrdBOkugMBA.jpg",
    "title": "Alone"
  },
  {
    "img": "https://marketplace.canva.com/EAFblcmUfO8/1/0/1600w/canva-blue-gradient-futuristic-surreal-experimental-music-album-cover-aYRB3hqPcRQ.jpg",
    "title": "Immerse"
  },
  {
    "img": "https://marketplace.canva.com/EAFkD109hh4/1/0/1600w/canva-modern-minimalist-graffiti-dream-music-album-cover-UFnhnxA5SRs.jpg",
    "title": "Dream"
  },
  {
    "img": "https://marketplace.canva.com/EAFcDj_7ZLs/1/0/1600w/canva-black-vintage-photographic-album-cover-sS3atNtmvK0.jpg",
    "title": "foreign"
  },
  {
    "img": "https://marketplace.canva.com/EAFgngzIptw/1/0/1600w/canva-black-red-yellow-dark-fire-heart-album-cover-1zF2DBwq_dA.jpg",
    "title": "Passionate"
  },
  {
    "img": "https://marketplace.canva.com/EAFaDe0935w/1/0/1600w/canva-blue-and-neon-green-minimalist-sky-vintage-tv-hip-hop-album-cover-3gOn9_INCSg.jpg",
    "title": "Dreams of love"
  },
  {
    "img": "https://marketplace.canva.com/EAFWbrXwlQQ/2/0/1600w/canva-black-minimalist-barbed-wire-hip-hop-album-cover-PLuSVhfrekY.jpg",
    "title": "Happines"
  },
  {
    "img": "https://marketplace.canva.com/EAFMpnHPAp4/1/0/1600w/canva-white-black-texture-thank-you-album-cover-7G3HNgYlp2o.jpg",
    "title": "Thanks"
  },
]
export default function Search() {

  const [searchTerm, setSearchTerm] = useState("")
  const filteredData = Data.filter((value) => {
    if (searchTerm === "") {
      return value;
    }
    else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return value;
    }
  })
  return (
    <>
      <div className='search-page'>
        <div className='search'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search Your Song'
            onChange={(event) => {
              setSearchTerm(event.target.value);

            }}
          />
        </div>
        <div className='search-songs'>
          <div className='telugu'>
            <h1>TELUGU</h1>
          </div>
          <div className='hindi'>
            <h1>HINDI</h1>
          </div>
          <div className='english'>
            <h1>ENGLISH</h1>
          </div>
          <div className='tamil'>
            <h1>TAMIL</h1>
          </div>
        </div>
        <div className='album'>
          {
            filteredData.map((value) => {
              return (
                <div className="">
                  <img src={value.img} alt="" width={"250px"} />
                  <h3>{value.title}</h3>
                </div>
              )
            })
          }
        </div>
        <hr />
        <div className='futter'>
          <div className='company'>
            <p>Company</p>
            <hr />
            <h6>About</h6>
            <h6>Jobs</h6>
            <h6>For the Records</h6>
          </div>
          <div className='communities'>
            <p>Communities</p>
            <hr />
            <h6>For Artists</h6>
            <h6>Developers</h6>
            <h6>Advertising</h6>
            <h6>Investors</h6>
            <h6>Vendors</h6>
          </div>
          <div className='useful'>
            <p>Useful Links</p>
            <hr />
            <h6>Support</h6>
            <h6>Free Mobile App</h6>
          </div>
          <div className="social">
            <i class="fa-brands fa-instagram"></i> <hr />
            <i class="fa-brands fa-facebook"></i> <hr />
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </>
  )
}
