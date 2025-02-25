require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3000


const app = express()

// middleware here 
app.use(cors())
app.use(express.json())


// routes here
app.get('/', (req, res) => {
    res.send('tourist management server is running')
})




app.listen( port , ()=>{
    console.log(`Server is running on port ${port}`)
})