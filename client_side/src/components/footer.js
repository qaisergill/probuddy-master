import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs"

const Footer = () => {
  return (
    <>
      {/* <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <button>Get Started</button>
            </NavLink>
          </div>
        </div>
      </section> */}

      {/* footer section  */}
      <footer>
      <div className="whole_footer">
        <div className='page-width'>
          <div className='footer_inner_grid'>
            <div className='footer_about'>
              {/* <div className='logo'><img src={logoimg} alt='' /></div> */}
              {/* <img src="./images/PROBUDDY.png" alt="" className='logo1' /> */}
              <div className="logoo">
                <h3>PROBUDDY</h3>
              </div>
              <p>PROBUDDY is a CV maker.</p>
            </div>
            <nav >
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact us</a></li>
              </ul>
            </nav>
            <nav>
              <ul className="icons">
                <li><a href=""><FaInstagram/></a></li>
                <li><a href=""><FaFacebookF/></a></li>
                <li><a href=""><FaTwitter/></a></li>
              </ul></nav>
            <div className='contact-us'>
              <ul>
              <a href="tel:+923334519926"><BsFillTelephoneFill />+923334519926</a>
                <li><a href="mailto:qaisernadeem042@gmail.com">qaisernadeem042@gmail.com</a></li>
                {/* <form className='form_footer' action=''>
                  <input type='text'/>
                  <input type='submit' value="submit"/>
                </form> */}
              </ul>

            </div>
          </div>
         

        </div>
        
        <p className='copyright'>
          @ 2023 All Rights Reserved
        </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
