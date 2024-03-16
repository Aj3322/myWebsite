const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

// Use environment variables for sensitive information
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const clustername = process.env.MONGO_CLUSTER_NAME;
const dbname = process.env.MONGO_DB_NAME;

// Construct the MongoDB connection URI
const mUri = `mongodb+srv://${username}:${password}@${clustername}.yf3tetk.mongodb.net`;

mongoose
  .connect(`${mUri}/${dbname}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Cloud");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Cloud:", error.message);
  });
