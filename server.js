const express = require("express");
const app = express();
const cors = require("cors");
const connectToMongo = require("./config/mongodb");
const authRoutes = require('./routes/authRoutes');
const productRoutes = require("./routes/productRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const cartRoutes = require("./routes/cartRoutes");
const dotenv = require("dotenv").config();
const port = process.env.port || 4004;



app.use(cors());
app.use(express.json());

app.use('/auth',authRoutes);
app.use('/products',productRoutes);
app.use('/wishlist',wishlistRoutes);
app.use('/cart',cartRoutes);

connectToMongo();

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})