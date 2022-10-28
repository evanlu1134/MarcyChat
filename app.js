//Requirements
  const express = require('express')
  const app = express()
  const cors = require('cors')
  const userRoutes = require("./routes/userRouter.js");
  const authRoutes = require("./routes/AuthRouter.js");
  const postRouter = require('./routes/postRoutes')
  const commentRouter = require('./routes/commentRoutes')
  
//middleware
app.use(express.json())
app.use(cors())

//pathways
app.use("/users",userRoutes)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)
app.use("/auth",authRoutes)



app.listen(3000)

