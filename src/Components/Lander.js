import React, {useEffect} from 'react';
import video from '../2891285696.mp4';
import './Lander.css';

function Lander() {
    
    // useEffect(() => {
    //     let a = window.scrollY;
    //     let b = -1*a;
    //     document.addEventListener('onscroll', () => {
    //         document.querySelector('.on-vid').style.transform = `translateY(${b}px)`;
    //     })
    //     console.log(a)
    //   })

    return (
        <>
        {/* <div className='scroll'> */}
            <div className="lander" id="lander">
                <div className="on-vid">
                    <img src="https://www.alterego-group.com/img/logo_white.svg" alt="" />
                    <img src="https://www.alterego-group.com/upload/resize_cache/webp/img/main_logo_text_mob.webp" alt="" />

                    <div className="bw-imgs" id="bw-imgs">
                        <div style={{display: 'flex', flexdirection: 'row'}}>
                            <div style={{width: '30px', height: '1px', backgroundColor: 'white', margin: 'auto'}}></div>
                            <a href="/" style={{margin: 'auto 10px'}}>MILAN</a>
                        </div>

                        <div className="btn" id="metaverse">METAVERSE</div>

                        <div style={{display: 'flex', flexdirection: 'row'}}>
                            <a href="/" style={{margin: 'auto 10px'}}>MONACO</a>
                            <div style={{width: '30px', height: '1px', backgroundColor: 'white', margin: 'auto'}}></div>
                        </div>
                    </div>

                    <img id="awards" src="https://www.alterego-group.com/upload/resize_cache/webp/img/main_logo_awards.webp" alt="" />
                    <div className='empty-v'><div id="empty-v"></div></div>
                </div>
                <div className='bgvideo'>
                    <video id='bgvideo' loop autoPlay muted><source src={video} type="video/mp4" /></video>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default Lander;