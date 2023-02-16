require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Worlddd!");
});

app.listen(port, () => {
  console.log(`Example app litening at http://localhost:${port}`);
});
