const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())



app.get("/api/catBreed", (request, response) => {
    response.json({
        
            domesticShortHair:{
                weight: "6-16 lbs",
                lifespan: "15-20 years"
            },
            maineCoon:{
                weight: "8-25 lbs",
                lifespan: "9-13 years"
            }
        
    })
})


app.listen(8000, ()=> console.log('connected to port 8000'));