import React from "react";
import Screenimg1 from "../../../assets/screen1.png"
import Slider1 from "../../../assets/slider-1.svg"

function Screen1() {
    return (
        <div className="container">
            <img className="img-header" src={Screenimg1} alt="" />

            <h1 className="screen1-text-1">
                Share your event and receive money in real time!
            </h1>
            <h1 className="screen1-text-2">
                You can invite people to join your live event through the app and give you monetary gifts in real time.
            </h1>

            <img className="slider" src={Slider1} alt="" />

            <a className="screen1-text-3" href="">Next</a>
        </div>
    )
}

export default Screen1;