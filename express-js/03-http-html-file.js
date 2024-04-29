//console.log('Express Tutorial')

const http = require("http");
const {readFileSync} = require('fs');

const homePage = readFileSync('./my-files/homepage.html');

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if (url === "/") {
    //console.log('User hit the server');
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    //console.log('User hit the server');
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  } else {
    //console.log('User hit the server');
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not FOUND</h1>");
    res.end();
  }
});

server.listen(5000);
