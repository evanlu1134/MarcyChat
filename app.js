
  //Middleware

  const express = require('express')
  const app = express()
  const {pool} = require('./db.js');
  const bcrypt = require('bcrypt')
  const cors =require('cors')
  const router = require('express-router')
  app.use(express.json());
  app.use(cors())


  
//   router.get('/users/login', usersController.login );
//   router.post('/users/login', usersController.authenticate );
// //   app.use(cors());

//  router.post('/users/create', usersController.validate, usersController.create );
  app.get('/register', async (req,res)=>{
   const x = await pool.query('SELECT * FROM users2 ORDER BY id')
   console.log(x)
    res.send(x.rows)
  })
  app.post('/register', async (req, res) => {
      const data = req.body
      const hashedPassword = await bcrypt.hash(data.password, 10)
      console.log(data)
      const post =  await pool.query('INSERT INTO users2 (id, firstName, lastName, email, hashedPassword) VALUES ($1,$2,$3,$4,$5) RETURNING * ',[data.id, data.firstName, data.lastName, data.email, hashedPassword  ] )
      return res.send(post.rows) 
      
       
    } 
  )
  
  
  app.listen(3000)