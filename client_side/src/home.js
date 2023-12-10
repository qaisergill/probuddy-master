import React from 'react';
// Import your CSS styles
import bannerimg from "./pictures/photos/resume_right_img.svg";
import image22 from "./pictures/photos/24by7.svg";
import image2 from "./pictures/photos/dollar.svg";
import image3 from "./pictures/photos/experience-team.svg";
import Image4 from "./pictures/photos/Rectangle 3.svg";
import image5 from "./pictures/photos/image 15 (1).png";
// import image6 from "./pictures/photos/image 11 (1).png"
import image7 from "./pictures/photos/image 16.png"
//  import bannerimg from "./pictures/photos/logo_image_blue.svg";


const Home = () => {
  return (
    <>
      <section className='banner_section'>
        <div className='page-width '>
          <div className='banner_grid'>
            <div className='banner-left'>
              <h2>Welcome To</h2>
              <h1>PRO<span>BUDDY</span></h1>
              <p>ProBuddy is your go-to CV maker, helping you craft professional and impressive resumes for your job-seeking needs.</p>
              <div className='btn_banner'>
                <a href='/'>Make CV</a>
              </div>
            </div>
            <div className='banner-right'>
              <div className='banner_img'>
                <img src={bannerimg} alt='' />
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='page-width section_margin'>
          <div className='after_banner_grid'>
            <div className='after_banner_inner'>
              <div className='after_banner_img'>
                <img src={image22} alt='' />
              </div>
              <h3>Make CV 24/7</h3>
            </div>
            <div className='after_banner_inner'>
              <div className='after_banner_img'>
                <img src={image2} alt='' />
              </div>
              <h3>It's Free  </h3>
            </div>
            <div className='after_banner_inner'>
              <div className='after_banner_img'>
                <img src={image3} alt='' />
              </div>
              <h3>Likely to get Job</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="page_width">
          <div className="columns1">
            <div className="paragraph1">
              <h3>Build Your Resume <span>Fast and Easy</span> .</h3>
              <img src={Image4} alt='' />
              <p>ProBuddy is lightning fast. There's no software to download. No multi-part sign-up<br /> form. No long-winded tutorials. Just a straightforward process.</p>
            </div>
          </div>
        </div>
        <div className='page_width'>
          <div className='who_we_are'>
            <div className='left_side'>
              <img src={image5} alt='' className='round-image' />

            </div>
            <div className='right_side'>
              <div className='title'>
                <h2> <span>RESUME MAKE</span></h2>
                <h3>Every Great Career Begins <br />
                  with <span>a Solid Resume</span> </h3>
              </div>
              <div className='text'>
                <h3>Before you ever step foot in a HR recruiter’s office to<br />
                  interview for that dream job, your resume is the first thing<br />
                  that crosses their desk.</h3>
                <p> Because they can’t meet you firsthand to witness your witty<br />
                  personality and ability to fit in well with
                  any team, your<br /> resume has to do the talking for you
                  That’s why it’s essential<br /> that your resume properly expresses who you
                  are, what you <br />bring to the table, and why they should immediately
                  pick up<br /> the phone and get you in the building.<br />
                  With Probuddy you can be sure that your resume isn’t just being<br />
                  added to the pile; it stands out & makes recruiters take
                  notice.</p>

              </div>
            </div>
          </div>
        </div>
        {/* these are different sections in below names are opposite */}
        <div className='page_width'>
          <div className='who_we_are'>

            <div className='right_side1'>
              <div className='title'>
                <h2> <span>FREE RESUME TEMPLATES</span></h2>
                <h3>Make the Most of Your
                  with <br /> <span>First Impression</span> </h3>
              </div>
              <div className='text1'>
                <h3> Six seconds. That’s the average time recruiters spend <br />looking at
                  your resume. Especially in those high-<br />powered jobs where
                  hundreds of people are applying.</h3>
                <p>  Probuddy provides the support you need to create, <br />format, and
                  prepare your resume like a professional, so <br />you can make every one those
                  seconds count. From white<br /> space to columns to easy-to-read titles
                  and sections our tools can ensure you can fit your talents and aptitudes
                  into each section with precision.<br /> More importantly, it’s fast, easy, and
 helps prepare you for your new career..</p>

              </div>
            </div>
            <div className='left_side1'>
              <img src={image7} alt='' className='round-image1' />

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
