const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
dotenv.config({ path: "./config.env" });
// require("./db/conn");
app.use(express.json());
// const User = require("./model/userSchema"); 


app.use(require("./router/auth"));


const PORT = process.env.PORT;
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
   console.log("Connection established");

   // Start the server only after the MongoDB connection is established
   app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
   });
}).catch((err) => {
   console.log("Error connecting to MongoDB:", err);
});

const middleware = (req, res, next) => {
   console.log("Hello from middleware");
   next(); 
};

// Use the middleware for all routes
app.use(middleware);



// Middleware applied to the /services route
app.get('/services', function(req, res, next) {
  console.log("Middleware here");
  next(); // 


}, function(req, res) {
  console.log("Route handler here");
  res.send("Hello, I'm here!");
});

app.get('/login', function(req, res) {
   res.send("Login page");
});
