import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images55 from "../pictures/photos/Regi.jpg"



// import image0 from "./pictures/photos/blue_cv.jpg";


const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    password: '',
    cPassword: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    console.log('Registration data:', user);
    const { name, email, phone, profession, password, cPassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        profession: profession,
        password: password,
        cpassword: cPassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Successful Registration");
      console.log("Registration Done");
      // Assuming `history` is defined somewhere
   navigate("/login");
    }
  };

  return (
    <>
      <div className="inner2">
        <div className="image-holder">
          <img src={images55} alt="image" />
        </div>
        <form onSubmit={PostData} method='POST'>
          <h3>Registration Form</h3>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              className="form-control"
              autoComplete='off'
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Your Email"
              className="form-control"
              autoComplete='off'
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Your Number"
              className="form-control"
              autoComplete='off'
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Your Profession"
              className="form-control"
              autoComplete='off'
              name="profession"
              value={user.profession}
              onChange={handleChange}
            />
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              autoComplete='off'
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              autoComplete='off'
              name="cPassword"
              value={user.cPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
