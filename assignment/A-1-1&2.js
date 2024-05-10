const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);

  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>This is the landing page !</h1>");
      res.write("\nYou get this page when you send a GET request ");
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>About Page</h1>");
      res.write("\nYou get this page when you send a GET request ");
      res.end();
    } else if (req.url === "/contact") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Contact Page</h1>");
      res.write("\nYou get this page when you send a GET request ");
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>Wrong Address</h1>");
      res.write("\nYou get this page when you send a GET request ");
      res.end();
    }
  }


  if (req.method === "POST") {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>This is the landing page !</h1>");
      res.write("\nYou get this page when you send a POST request");
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>About Page</h1>");
      res.write("\nYou get this page when you send a POST request");
      res.end();
    } else if (req.url === "/contact") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Contact Page</h1>");
      res.write("\nYou get this page when you send a POST request");
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>Wrong Address</h1>");
      res.write("\nYou get this page when you send a POST request");
      res.end();
    }
  }
});

const port = 5000;
server.listen(port, () => {
  console.log("----------------------");
  console.log("Server is listening on port " + port);
});
