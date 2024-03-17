const express = require("express");
const serverless = require("serverless-http");
const app = express();
// Require your database connection file
require("./db/conn");

// Import your routes
const routes = require("./router/router");

// Use middleware to parse JSON bodies
app.use(express.json());
app.use(express.json());
app.use(routes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
