import React from 'react';
import './HouseCateg.css';


function HouseCateg(props) {

    return(
        <div className="houseCateg">
            <div className="categ">
                <div className="categText">
                    <a href="/">{props.txt}</a>
                    <div className="empty-h"><div id="empty-h"></div></div>
                </div>
                <img src={props.img} alt="" />
            </div>
{/* 
            <div className="categ" id="categ-2">
                <div className="categText"><a href="/">COUNTRY HOUSES AMD VILLAS</a></div>
                <img src="https://www.alterego-group.com/upload/resize_cache/webp/img/mp02.webp" alt="" />
            </div>

            <div className="categ" id="categ-3">
                <div className="categText"><a href="/">MANSIONS AND ESTATES</a></div>
                <img src="https://www.alterego-group.com/upload/resize_cache/webp/img/mp03.webp" alt="" />
            </div> */}
        </div>
    );
}

export default HouseCateg