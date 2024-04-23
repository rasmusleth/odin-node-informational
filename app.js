const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let uri = path.join(__dirname, "/index.html");
  res.sendFile(uri);
});

app.get("/about", (req, res) => {
  let uri = path.join(__dirname, "./about.html");
  res.sendFile(uri);
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "./contact-me.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./404.html"));
});

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});
