import React from "react";
import { heroimage } from "./utils/constants";
import { RiTimerLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { HiStar } from "react-icons/hi2";
const FirstEle = () => {
    return (
        <>
            <div className="firstdiv">
                <div className="outer">
                    <h1>Mortgages <br></br> made simple</h1>
                    <div className="outer1">
                    <div className="approval">
                            <a href="">Start my approval</a>
                            <div className="approvaltext">
                                <RiTimerLine />
                                <span> 3 min | No credit impact</span>
                            </div>
                    </div>
                        <div>
                            <img src={heroimage} alt="Hero Variant" />
                        </div>
                       

                        <div className="rightside">
                            <div className="rightside1">
                                <FcGoogle className="googleicon"/>
                                <div>
                                    <HiStar className="staricon"/>
                                    <HiStar className="staricon"/>
                                    <HiStar className="staricon"/>
                                    <HiStar className="staricon"/>
                                </div>
                            </div>
                            <div className="rightside2">
                            <span>4.6 | 3177 Google reviews</span>
                            </div>
                        </div>

                </div>
            </div>
            </div>

        </>
    )
}
export default FirstEle;