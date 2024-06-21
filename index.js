const express = require("express");
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello from express kk !"); // Send a response to the root path
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
