import React from "react";
import { Link } from "react-router-dom";
import Screenimg3 from "../../../assets/screen3.png"
import Slider3 from "../../../assets/slider-3.svg"

function Screen3() {
    return (
        <div className="container">
            <img className="img-header" src={Screenimg3} alt="" />

            <h1 className="screen1-text-1">
                Get paid for your live content through subscriptions!
            </h1>
            <h1 className="screen1-text-2">
                Create content and earn from it by getting subscribers!
            </h1>

            <img className="slider" src={Slider3} alt="" />
            <Link to="/login">
                <a className="screen1-text-3" href="">Next</a>
            </Link>
            <Link to="onboardscreen2">
                <a className="screen1-text-4" href="">Prev</a>
            </Link>
        </div>
    )
}

export default Screen3;