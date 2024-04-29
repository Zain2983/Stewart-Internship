//console.log('Express Tutorial')

const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if (url === "/") {
    //console.log('User hit the server');
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === "/about") {
    //console.log('User hit the server');
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  }
  // styles
  else if (url === "/styles.css") {
    //console.log('User hit the server');
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // image
  else if (url === "/logo.svg") {
    //console.log('User hit the server');
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  // Logic
  else if (url === "/browser-app.js") {
    //console.log('User hit the server');
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    //console.log('User hit the server');
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not FOUND</h1>");
    res.end();
  }
});

server.listen(5000);
