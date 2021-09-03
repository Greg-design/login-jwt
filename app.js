require('dotenv').config();
const express = require('express');
const app = express()
const userRouter = require('./login/routes/userRouter')
const adminRouter = require('./login/routes/adminRouter')
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_CONNECTION_URL, 
    {useNewUrlParser:true, 
    useUnifiedTopology: true
},
(error)=>{
    if(error)
    console.log(error)
    else
    console.log("Mongo Connected")
})

app.use('/user', express.json(), userRouter);

app.use('/admin',  express.json(), adminRouter)

app.listen(process.env.PORT, () => { console.log("Server Runing")})



