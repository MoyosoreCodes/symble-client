import React from "react";
import ConceptActive from "../../../assets/concept-active.svg";
import Auction from "../../../assets/auction.svg";
import Marketing from "../../../assets/marketing.svg";
import Donations from "../../../assets/donation.svg";
import PartiesActive from "../../../assets/parties-active.svg";
import PodcastActive from "../../../assets/podcast-active.svg";
import Advert from "../../../assets/advert.svg";
import Commerce from "../../../assets/commerce.svg";

function Cartegories2() {
    return (
        <div className="container">
            {/* header */}
                <div className="cat-header">
                    <p className="cat-text">
                        Choose 3 or more categories you would like to see live events in order of preference.
                    </p>
                </div>
            {/* header */}

            {/* body */}
                <div className="cat-body">
                    <div className="cat-img">
                        <img src={ConceptActive} alt="" />
                        <img src={Auction} alt="" />
                    </div>

                    <div className="cat-img">
                        <img src={Marketing} alt="" />
                        <img src={PodcastActive} alt="" />
                    </div>

                    <div className="cat-img">
                        <img src={PartiesActive} alt="" />
                        <img src={Donations} alt="" />
                    </div>

                    <div className="cat-img">
                        <img src={Advert} alt="" />
                        <img src={Commerce} alt="" />
                    </div>
                    {/* button */}
                        <button className="cat-active">
                            Done (3 selected)
                        </button>
                    {/* button */}
                </div>   
            {/* body */}
        </div>
    )
}

export default Cartegories2;