import React from "react";
import Phoneimg from "../../../assets/phone.svg"
import Coinimg from "../../../assets/coin.svg"
import Vector1 from "../../../assets/vector1.svg"
import Vector2 from "../../../assets/vector2.svg"
import { Link } from "react-router-dom";

function GettingStarted() {
    return (
        <div className="blue-container">
            <div className="img-container">
                <div className="Phoneimg">
                    <img src={Phoneimg} alt="" />
                </div>
                <div className="Coinimg">
                    <img src={Coinimg} alt="" />
                </div>
                <div>
                    <div className="vector1">
                        <img src={Vector1} alt="" />
                    </div>
                    <div className="vector2">
                        <img src={Vector2} alt="" />
                    </div>
                </div>
            </div>
                <div >
                    <h1 className="get-text-1">Give to appreciate good content. Receive as a creator.</h1>
                    <h1 className="get-text-2">We can help you give when you watch live events or receive as an event organiser seamlessly.</h1>
                    <Link to="/onboardscreen1">
                        <button className="get-btn">
                            Get started
                        </button>
                    </Link>
                </div>
        </div>
    )
}

export default GettingStarted;