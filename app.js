
  
//Requirements
  const express = require('express')
  const app = express()
  const {pool} = require('./db.js');
  const bcrypt = require('bcrypt')
  const cors = require('cors')
  const userRoutes = require("./routes/userRouter.js");
  const authRoutes = require("./routes/AuthRouter.js");
  // const cookieParser = require("cookie-parser");

  //Middleware

  app.use(express.json());
  app.use(cors());


  app.use( "/login",authRoutes)
  app.use("/register",userRoutes)
  

  
  
  app.listen(3000)