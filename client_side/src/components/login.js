import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    // Handle your form submission logic here
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid credentials");
      console.log("Invalid ");
    } else {
      window.alert("Successful login");
      console.log(" Done");
      // Assuming `history` is defined somewhere
      navigate("/");
    }
  };

  return (
    <div>
      <div className="logo"></div>
      <div className="login-block">
        <form method="POST">
          <h1>Login</h1>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Useremail"
            id="username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            id="password"
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
