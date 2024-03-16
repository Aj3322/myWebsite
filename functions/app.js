const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

// Require your database connection file
require("./db/conn");

// Import your routes
const routes = require("./router/router");

// Use middleware to parse JSON bodies
app.use(express.json());

// Use your routes
router.use(routes);

// Define a default route
router.get("/", (req, res) => {
  res.send("App is running..");
});

// Mount the router at the appropriate base path
app.use("/.netlify/functions/app", router);

// Export the Express app wrapped with serverless-http
module.exports.handler = serverless(app);
