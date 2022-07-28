import React from "react";
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
            <h1 className="screen1-text-3">
                Next
            </h1>
            <h1 className="screen1-text-4">
                Prev
            </h1>
        </div>
    )
}

export default Screen3;