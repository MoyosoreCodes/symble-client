import React from "react";
import { Link } from "react-router-dom";
import Screenimg2 from "../../../assets/screen2.png"
import Slider2 from "../../../assets/slider-2.svg"

function Screen2() {
    return (
        <div className="container">
            <img className="img-header" src={Screenimg2} alt="" />

            <h1 className="screen1-text-1">
                Buy and sell products in real time!
            </h1>
            <h1 className="screen1-text-2">
                Through live commerce, vendors can showcase their products more and get them sold to buyers in real time!
            </h1>

            <img className="slider" src={Slider2} alt="" />
            <Link to="/onboardscreen3">
                <a className="screen1-text-3" href="">Next</a>
            </Link>
            <Link to="/onboardscreen1">
                <a className="screen1-text-4" href="">Prev</a> 
            </Link>
             
        </div>
    )
}

export default Screen2;