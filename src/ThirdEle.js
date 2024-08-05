import React from "react";
import { homeimg } from "./utils/constants";
import Card1 from "./Card1";
import { card2img } from "./utils/constants";
import Card2 from "./Card2";
import { card3img } from "./utils/constants";
import { card4img } from "./utils/constants";
const ThirdEle = () => {
    return (
        <>
            <div className="thirddiv">
                <div className="thirddiv1">
                    <h1>Got questions?<br></br>We've got answers</h1>
                    <div className=" btnclass2">
                        <button className="firstbtn">Our products</button>
                        <button className="restbtn">Calculators</button>
                        <button className="restbtn">Guide & FAQs</button>
                    </div>
                </div>
                <div className="thirddiv2">
                    <Card1
                        title="Buying your first home with Better"
                        image={homeimg}
                        arrow={true}
                    />
                    <Card2
                        title="One Day Mortgage¹"
                        description="Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.¹"
                        arrow={true}
                        image={card2img}
                    />
                  
                </div>
                <div className="thirddiv2">
                <Card2
                        title="Better HELOC"
                        description=" Introducing One Day HELOC™ - your express lane to getting cash from
            your home with our Home Equity Line of Credit2. Access up to 90% of
            your home equity as cash in as little as 7 days."
                        arrow={true}
                        image={card3img}
                    />
                     <Card1
                        title="Insurance"
                        image={card4img}
                        arrow={true}
                    />
                </div>
            </div>
            <div className="line"></div>

        </>
    )
}
export default ThirdEle;