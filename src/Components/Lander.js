import React from 'react';
import video from '../2891285696.mp4';
import './Lander.css';

function Lander() {
    // window.onscroll = function () {
    //     var div = document.getElementById('bgvideo')
    //     div.style.height = `${700 - window.scrollY}px`
    //     div.style.width = '100vw'
    // }
    return (
        <>
            <div className="lander" id="lander">
                <div className="on-vid">
                    <img src="https://www.alterego-group.com/img/logo_white.svg" alt="" />
                    <img src="https://www.alterego-group.com/upload/resize_cache/webp/img/main_logo_text_mob.webp" alt="" />

                    <div className="bw-imgs" id="bw-imgs">
                        <div><a href="/">MILAN</a></div>
                        <div className="btn" id="metaverse">METAVERSE</div>
                        <div><a href="/">MONACO</a></div>
                    </div>

                    <img id="awards" src="https://www.alterego-group.com/upload/resize_cache/webp/img/main_logo_awards.webp" alt="" />
                    <div className='empty-v'><div id="empty-v"></div></div>
                </div>
                <div className='bgvideo'>
                    <video id='bgvideo' loop autoPlay muted><source src={video} type="video/mp4" /></video>
                </div>
            </div>
            <div style={{height: '1000px'}}></div>
        </>
    );
}

export default Lander;