const http = require("http");
const PORT = 3000;

//Why does the network tab not show any details of any requests?
const server = http.createServer((request, response) => {
  console.log(request.method, request.url);
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Hello</h1>");
});

server.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));
