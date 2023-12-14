import React from 'react';
import imagee2 from "./pictures/photos/cv_generator.jpg"
import image0 from "./pictures/photos/blue_cv.jpg";

const About = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <h1>About <span>Us</span></h1>
      {/* First Container */}
      <div className="responsive-container-block Container">
        <img className="mainImg" src={imagee2} alt="Mission Image" />
        <div className="allText aboveText">
          <p className="text-blk headingText">
            Our Mission
          </p>
          <p className="text-blk subHeadingText">
           Crafting Your Professional Story
          </p>
          <p className="text-blk description">
          At Probuddy, we are dedicated to empowering individuals in their career journeys by providing a seamless and innovative CV creation experience. We believe that every career path is unique, and your CV should reflect your individuality and accomplishments.
          </p>
          <a href="/" className="explore">
        Explore
      </a>                        
        </div>
      </div>

      {/* Second Container */}
 <div className="responsive-container-block Container bottomContainer">
        <img className="mainImg" src={image0} alt="Vision Image" />
        <div className="allText bottomText">
          <p className="text-blk headingText">
            Our Vision
          </p>
          <p className="text-blk subHeadingText">
          Elevating Careers Through Innovative CV Solutions.
          </p>
          <p className="text-blk description">
          Our commitment is to be the go-to resource for professionals seeking to create compelling resumes that not only capture their achievements but also showcase their unique strengths. Join us on this journey as we shape the future of professional storytelling..
          </p>
          {/* <button className="explore">
            Explore
          </button> */}
          <a href="/" className="explore">
        Explore 
      </a>
        </div>
      </div> 
    </div>
  );
};

export default About;
