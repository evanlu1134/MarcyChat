
  
//Requirements
  const express = require('express')
  const app = express()
  const {pool} = require('./db.js');
  const bcrypt = require('bcrypt')
  const cors =require('cors')
  const router = require('./routes/userRouter.js')
  const userRoutes = require("./routes/userRouter.js");
  const authRoutes = require("./routes/AuthRouter.js");
  const cookieParser = require("cookie-parser");

  //Middleware
  app.use(authRoutes)
  app.use(userRoutes)
  app.use(express.json());
  app.use(cors());



  app.get('/register', async (req,res)=>{
   const x = await pool.query('SELECT * FROM users2 ORDER BY id')
   console.log(x)
    res.send(x.rows)
  })
  app.post('/register', async (req, res) => {
      const data = req.body
      const hashedPassword = await bcrypt.hash(data.password, 10)
      console.log(data)
      const post =  await pool.query('INSERT INTO users2 (first,last,email,password) VALUES ($1,$2,$3,$4) RETURNING * ',[data.firstName,data.lastName,data.email,hashedPassword] )
      return res.send(post.rows) 
    } 
  )
  
  
  app.listen(3000)