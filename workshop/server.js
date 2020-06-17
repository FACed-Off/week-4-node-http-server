const http = require("http");
const PORT = 3000;

//Why does the network tab not show any details of any requests?
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("content-type", "text/plain");
  response.end("hello");
});

server.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));
