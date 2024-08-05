import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card1 = ({ title, image, arrow }) => {
    return (
        <div className="card1">
            <div className="card-header1">
                <h2>{title}</h2>               
                {arrow && (
                         <div className="card-arrow">
                            <FaArrowRight className="card-arrow1"/>
                        </div>

                    )}

            </div>
           
           {image && (
                   <div className="card1img">
                <img className="card-image" src={image} alt={title} />
                   </div>
            )}
         
        </div>
    );
};
export default Card1;