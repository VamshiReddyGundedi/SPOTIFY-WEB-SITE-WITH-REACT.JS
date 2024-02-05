import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css'
export default function Home() {
    return (
        <>
            <div className='playlist'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img src="https://img.freepik.com/free-photo/inspiration-asian-young-woman-s-portrait-dark-wall-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-youth-sales-ad_155003-39803.jpg?size=626&ext=jpg&ga=GA1.1.1041476026.1698393044&semt=ais" alt="" className='w-100' style={{ height: "45vh" }} />
                        <Carousel.Caption>
                            <h3>Hear sound all around.</h3>
                            <p>Over 100 million songs and 30,000 playlists, always ad‑free.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src="https://img.freepik.com/free-vector/music-notes-particle-design-icon-vector-illustration_460848-6983.jpg?size=626&ext=jpg&ga=GA1.1.1041476026.1698393044&semt=ais" alt="" className='w-100' style={{ height: "45vh" }} />
                        <Carousel.Caption>
                            <h3>Music is Expression.</h3>
                            <p>Each song can be interpreted in more ways than one. Check out the videos and gifs others have used to express their favorite music. Add new ones and tell us what your vibe is.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src="https://img.freepik.com/free-photo/musician-isolated-dark-studio-neon-light_155003-34036.jpg?size=626&ext=jpg&ga=GA1.1.1041476026.1698393044&semt=sph" alt="" className='w-100' style={{ height: "45vh" }} />
                        <Carousel.Caption>
                            <h3>Music is Connection.</h3>
                            <p>
                                Music is more meaningful when shared with others. Resso's community features let you interact with your friends over your favorite tracks, create and share playlists, and comment on the tracks you love.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='benifits' >
                <img src="https://lf16-fe.resso.me/obj/anote-fe/socrates/home-web/static/media/premium-unlimited-skips.815c22a1.png" alt="" width="280px"/>
                <img src="https://lf16-fe.resso.me/obj/anote-fe/socrates/home-web/static/media/premium-on-demand-listening.df950187.png" alt="" width="280px" />
                <img src="https://lf16-fe.resso.me/obj/anote-fe/socrates/home-web/static/media/premium-ads-free.7d5988fd.png" alt="" width="280px" />
                <img src="https://lf16-fe.resso.me/obj/anote-fe/socrates/home-web/static/media/premium-high-quality.77718a5e.png" alt="" width="280px" />
                <img src="https://lf16-fe.resso.me/obj/anote-fe/socrates/home-web/static/media/premium-sound-effect.c8db1652.png" alt="" width="280px" />
            </div>
            <div className='Album'>
                <Card style={{ width: '18rem' }} className='card'>
                    <Card.Img variant="center" src="https://img.freepik.com/free-photo/caucasian-woman-s-portrait-isolated-blue-background-multicolored-neon-light_155003-32526.jpg?size=626&ext=jpg&ga=GA1.1.1041476026.1698393044&semt=ais"/>
                    <Card.Body className='card-body'>
                        <Card.Title>Happy Hits</Card.Title>
                        <Card.Text>
                            Hits to boost your mood and fill you with happyness...
                        </Card.Text>
                        <Button variant="primary">PLAY HERE</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-caucasian-musician-playing-guitar-neon-light-purple_155003-5499.jpg?size=626&ext=jpg&ga=GA1.1.1041476026.1698393044&semt=ais"/>
                    <Card.Body>
                        <Card.Title>Rock Classics</Card.Title>
                        <Card.Text>
                            Rock legends & epic songs that continue to inspire.
                        </Card.Text>
                        <Button variant="primary">PLAY HERE</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/close-up-hands-holding-headphones_23-2148678418.jpg?size=626&ext=jpg&ga=GA1.1.1041476026.1698393044&semt=ais" />
                    <Card.Body>
                        <Card.Title>Lounge-Soft House</Card.Title>
                        <Card.Text>
                           Soft house music for your laidback moments.
                        </Card.Text>
                        <Button variant="primary">PLAY HERE</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/band-mates-performing-together_107420-96130.jpg?size=626&ext=jpg&ga=GA1.1.1041476026.1698393044&semt=ais" />
                    <Card.Body>
                        <Card.Title>Lofi Chill</Card.Title>
                        <Card.Text>
                        Lazy slow lofi beats for laid-back moments.
                        </Card.Text>
                        <Button variant="primary">PLAY HERE</Button>
                    </Card.Body>
                </Card>
            </div>
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
        </>
    )
}
