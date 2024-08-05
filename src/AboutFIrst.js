import React from 'react';
import { aboutcardimg } from './utils/constants';
const AboutFirst = () => {
  return (
    <div className="aboutcard">
      <div className="about-card-content">
        <h3>The status quo is broken</h3>
        <p>
          The traditional processes around homeownership are opaque and stressful.
          Fees aren't transparent and some are simply outrageous in size.
          Traditional mortgage lending is rife with unnecessary fees and slow,
          painful processes. It's a system set up to benefit insiders - not you.
          Better.com CEO, Vishal Garg, set out to change that.
        </p>
        <button className="aboutbtn">Read Vishal's Story</button>
      </div>
      <div>
      
        <div className="about-card-image">
        <img src={aboutcardimg} alt="Card Image" />
      </div>
      </div>
       
    </div>
  );
};

export default AboutFirst;