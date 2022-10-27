# Project Name

## Heading
Name the product in a way the reader (i.e. your target customers) will understand. (3+ sentences)

## Sub-Heading
Describe who the market for the product is and what benefit they get. (One sentence only underneath the title)

## Summary
Give a summary of the product and the benefit. What are all the things a user can do when use your product? This is the most important section for your readers, so make this paragraph good. (5+ sentences)

## Problem
Describe the problem your product solves. Who experiences this problem? (3+ sentences)

## Solution
Describe how your product elegantly solves the problem. (3+ sentences)

## Key Technical Challenge
What will likely be the most challenging technical hurdle you must overcome in order to complete this project?

## Extension Opportunities
What are opportunities for you to expand the scope of this project by adding additional features to solve new but related problems?

## ERD Diagram
Link your ERD diagram.

## Wireframes
Link your wireframes.

<!-- 


  app.get('/register', async (req,res)=>{
   const x = await pool.query('SELECT * FROM users2 ORDER BY id')
   console.log(x)
    res.send(x.rows)
  })
  // app.post('/register', async (req, res) => {
  //     const data = req.body
  //     const hashedPassword = await bcrypt.hash(data.password, 10)
  //     console.log(data)
  //     const post =  await pool.query('INSERT INTO users2 (first,last,email,password) VALUES ($1,$2,$3,$4) RETURNING * ',[data.firstName,data.lastName,data.email,hashedPassword] )
  //     return res.send(post.rows) 
  //   } 
  // )

  app.post('/login', async (req, res) => {
    const data = req.body
    const hashedPassword = await bcrypt.hash(data.password, 10)
    console.log(data)
    const post =  await pool.query('INSERT INTO users2 (first,last,email,password) VALUES ($1,$2,$3,$4) RETURNING * ',[data.firstName,data.lastName,data.email,hashedPassword] )
    return res.send(post.rows) 
  } 
) -->