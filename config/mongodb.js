const mongoDB = require("mongoose");
const dotenv = require("dotenv").config();

const connectToMongo = async () => {
  try {
    await mongoDB.connect(
      `mongodb+srv://Ahmad:${process.env.MONGO_PASS}@ahmadcluster.2of9t.mongodb.net/${process.env.MONGO_NAME}?retryWrites=true&w=majority&appName=AhmadCluster`
    );
    console.log("connected to mongodb successfully");
  } catch (error) {
    console.log(`error connecting to mongodb: ${error}`);
  }
};

module.exports = connectToMongo