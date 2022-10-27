<<<<<<< HEAD

  
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
=======
const express = require('express');
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 5432;

const studentRouter = require('./routes/studentsRoutes')
const postRouter = require('./routes/postRoutes')
const commentRouter = require('./routes/commentRoutes')


//middleware
app.use(express.json())
app.use(cors())

//pathways
app.use("/students", studentRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.listen(PORT, () => {
    console.log(`listening http://localhost:${PORT}`)
})
>>>>>>> e29577269830c2299c547995951c1ab9b034fad2
