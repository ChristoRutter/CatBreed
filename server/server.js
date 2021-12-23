const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.listen("/api/catBreed", ()=> console.log("connected to port 8000"))