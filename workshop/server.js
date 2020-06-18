const http = require("http");
const PORT = 3000;
const homeHandler = require("./handlers/home");

//Why does the network tab not show any details of any requests?
const server = http.createServer((request, response) => {
  //Where does the request corresponding to favicon,ico come from?
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url === "/goodbye") {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Goodbye</h1>");
  } else if (url === "/hello") {
    response.writeHead(302, { location: "/" });
    response.end();
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Not found</h1>");
  }
});

server.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));
