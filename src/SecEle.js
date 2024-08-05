import React from "react";
import { IoStar } from "react-icons/io5";
import { heroimage2 } from "./utils/constants";
const SecEle=()=>{
    return (
        <>
        <div className="secdiv">
            <div className="secdiv1">
                <div className="imgclass">
                    <img src={heroimage2}  className="heroimage2class"/>
                </div>
                <div className="btnclass">
                    <button className="firstbtn">Arian</button>
                    <button className="restbtn">Amanda</button>
                    <button className="restbtn">Paul</button>
                </div>
            </div>
            <div className="secdiv2">
                <h2>Find out why <br></br> we're better</h2>
                <a href="">See all our stories</a>
                <div className="trustpilot">
                <IoStar className="truststar" />
                <span>Trustpilot</span>
               <span><strong> Excellent</strong></span>
               <span><strong> 4.3</strong> out of 5</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default SecEle;