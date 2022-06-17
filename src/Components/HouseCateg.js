import React, {useEffect} from 'react';
import './HouseCateg.css';


function HouseCateg(props) {

    // useEffect(() => {
    //   let a = window.scrollY;
    //   document.querySelector('.houseCateg').addEventListener('onscroll', () => {

    //       document.querySelector('.houseCateg').style.transform = `translateY(${a})`;
    //   })
    // })

    return(
        <div className="houseCateg">
            <div className="categ">
                <div className="categText">
                    <a href="/">{props.txt}</a>
                    <div className="empty-h"><div id="empty-h"></div></div>
                </div>
                <img src={props.img} alt="" />
            </div>
        </div>
    );
}

export default HouseCateg