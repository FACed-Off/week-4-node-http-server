const http = require("http");
const PORT = 3000;
const homeHandler = require("./handlers/home");
const goodbyeHandler = require("./handlers/goodbye");
const helloHandler = require("./handlers/hello");
const missingHandler = require("./handlers/missing");

//Why does the network tab not show any details of any requests?
const server = http.createServer((request, response) => {
  //Where does the request corresponding to favicon,ico come from?
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url === "/goodbye") {
    goodbyeHandler(request, response);
  } else if (url === "/hello") {
    helloHandler(request, response);
  } else {
    missingHandler(request, response);
  }
});

server.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));
