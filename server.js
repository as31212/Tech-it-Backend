const express = require("express"); //import express
const app = express(); // add express server to variable
const cors = require("cors"); //imports cross origin resource sharing library
const connectToMongo = require("./config/mongodb"); //imports mongodb connection function from config file

// imports routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require("./routes/productRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const cartRoutes = require("./routes/cartRoutes");
const insertMockData = require("./utils/generateMockData"); // call this function when you need to populate the product database

const dotenv = require("dotenv").config(); // this is importing and configuring the dotenv files
const port = process.env.port || 4004; //extracts port variable from dot.env and if .env is not found then will call port 4004



app.use(cors()); // allows server to be used by all ip address
app.use(express.json()); // middle ware to have json be parsed with every request by default 

// uses routes in server
app.use('/auth',authRoutes);
app.use('/products',productRoutes);
app.use('/wishlist',wishlistRoutes);
app.use('/cart',cartRoutes);

connectToMongo(); //connect to mongoDB imported from config file 

 //generates 100 random products using faker library

// this is the function that starts the server
app.listen(port,()=>{ 
    console.log(`listening on port ${port}`);
})