import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const sendEmail = (e) => {
      e.preventDefault();
      // emailjs.send("service_zpdbbof","template_y2lsjwp");
      emailjs
        .sendForm('service_zpdbbof', 'template_y2lsjwp', form.current, 'Bqz9qiED8okTNZWDc')
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Email sent successfully!");
          },
          (error) => {
            console.error("Error sending email:", error.text);
            alert("Error sending email. Please try again.");
          }
        );
    };
    
  };

  return (
    <div className="container">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form autoComplete="off"   action='https://formspree.io/f/mdorqwre'method="POST" ref={form} onSubmit={sendEmail}>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder='Username' />
             
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" placeholder='Email' />
              
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="number" name="phone" className="input" placeholder='Phone' />
             
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder='Message'></textarea>
           
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
