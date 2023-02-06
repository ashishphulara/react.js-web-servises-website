import React from 'react'
import vg from  "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
            <h1>TechHold</h1>
            <p>solution to your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are the only solution to your tech problems.
                we are leading tech company whose main goal is
                to increase problem solving capacity in people.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>
                Who we are
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut rerum, enim quibusdam quia laboriosam eaque veritatis, aspernatur dignissimos debitis labore sint magni officiis excepturi provident, delectus quae modi doloremque. Dolorem, quos nesciunt numquam tempora earum eum obcaecati quasi, modi aspernatur repudiandae temporibus provident, minima iure deserunt suscipit sit ipsum officiis! Illum voluptatem cum, quam eveniet laborum adipisci est consequatur tempore iure? Temporibus laudantium alias nisi suscipit necessitatibus veritatis ipsum neque ea quidem quod magnam molestias ad blanditiis nam, dolorem fuga in sequi odit ab omnis obcaecati mollitia! Esse dignissimos reiciendis necessitatibus est a quas nulla incidunt magni quae voluptatem!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus ipsam vitae enim veniam quidem iure ea quisquam, reiciendis autem? Iste quam velit quasi recusandae praesentium est quisquam quibusdam optio aperiam. Quas enim possimus facilis dolorum corporis temporibus dolorem nostrum odit, deserunt similique necessitatibus a nulla vero animi voluptatem maxime!
            </p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:"0.3s"
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.5s"
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:"0.7s"
            }}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
            <div style={{
                animationDelay:"1s"
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
        </article>
        </div>
       
    </div>
    </>
  )
}

export default Home