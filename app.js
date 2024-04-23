const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 8080;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  const uri = url.parse(req.url);
  let filename = "";

  switch (uri.pathname) {
    case "/":
      filename = "./index.html";
      break;
    case "/about":
      filename = "./about.html";
      break;
    case "/contact":
      filename = "./contact-me.html";
      break;
    default:
      filename = "./404.html";
  }

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server listening on ${hostname}:${port}`);
});
