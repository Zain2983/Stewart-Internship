const http = require("http");
const { hostname } = require("os");

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


  // this is used if the client prematurely ends the connection or if its interrupted 
  req.on('close', () => {
    console.log('Request closed by the client');
  });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // console.log(req.headers);
  
  // Properties of req.headers :

  // Content-Type: Specifies the media type of the request body, typically used with POST or PUT 
  // requests.
  // Content-Length: Indicates the length of the request body in bytes.
  // User-Agent: Provides information about the client making the request, such as the browser or 
  // HTTP client.
  // Host: Specifies the host and port of the requested resource, including the domain 
  // name and port number.
  // Accept: Indicates the media types that the client is willing to receive in the response.
  // Accept-Encoding: Specifies the encoding algorithms that the client supports.
  // Accept-Language: Indicates the natural languages that the client prefers for the response.
  // Cookie: Contains any cookies sent by the client.
  // Authorization: Contains credentials for authenticating the client with the server, often used 
  // for HTTP Basic or Bearer authentication.
  // Referer: Indicates the URL of the page that referred the client to the current page.
  // Connection: Specifies options for managing the connection, such as whether to keep the 
  // connection alive.
  // If-Modified-Since: Allows the client to perform conditional requests based on the last
  // modification timestamp of the requested resource.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // console.log(req.socket);

// Properties of req.socket :

// remoteAddress: Returns the IP address of the remote client.
// remotePort: Returns the port number of the remote client.
// localAddress: Returns the local IP address of the server.
// localPort: Returns the local port number of the server.
// bytesRead: Returns the number of bytes received from the socket.
// bytesWritten: Returns the number of bytes sent to the socket.
// connecting: Indicates whether the socket is in the process of connecting.
// destroyed: Indicates whether the socket has been destroyed.

// Among these, properties like remoteAddress, remotePort, localAddress, and localPort are 
// commonly used for identifying the client's connection details and server's address information. 
// Methods like write, end, and destroy are frequently used for sending data, closing connections, 
// and handling errors.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Other commonly used functions

  // req.method: Returns the HTTP method of the request (e.g., GET, POST, PUT, DELETE).
  // req.url: Returns the URL string of the request.
  // req.headers: Returns an object containing the HTTP headers sent by the client.
  // req.params: Returns an object containing route parameters.
  // req.query: Returns an object containing the URL query parameters.
  // req.body: Returns the body of the request (for POST and PUT requests).
  // req.cookies: Returns an object containing the parsed cookies sent by the client.
  // req.ip: Returns the client's IP address.
  // req.protocol: Returns the request protocol (e.g., "http" or "https").
  // req.get(header): Returns the specified HTTP header value.


});

const port = 5000;
server.listen(port, () => {
  console.log("----------------------");
  console.log("Server is listening on port " + port);
});


