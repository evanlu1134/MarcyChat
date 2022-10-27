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