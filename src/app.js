const express = require("express");
require("./db/conn");
const app = express();
const routes = require("./router/router");
const path = require("path");
app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || 80;
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));

// Handle 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
