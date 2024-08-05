import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card2= ({ title, description, arrow,image  }) => {
    return (
      <div className="card2">
        <div className="card-header2">
          <h2>{title}</h2>
          <p>{description}</p>
          {arrow && (
                         <div className="card-arrow">
                            <FaArrowRight className="card-arrow1"/>
                        </div>

                    )}
        </div >
       
       <div className="card2img">
       {image && (
       
          <img className="card-image2" src={image} alt={title} />
        )}
       </div>
   
    </div>
  );
};
export default Card2;