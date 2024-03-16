const express = require("express");
require("./db/conn");
const app = express();
const routes = require("./router/router");
const path = require("path");
app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || 3000;
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
