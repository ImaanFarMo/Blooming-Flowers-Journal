require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const Reflection = require('./models/reflection.model.js');
const userRoute = require("./routes/user.route.js");
const reflectionRoute = require("./routes/reflection.route.js");
const app = express()
const cors = require("cors");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//routes
app.use("/api/users", userRoute);
app.use("/api/reflections", reflectionRoute);


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});

