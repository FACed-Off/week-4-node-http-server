const http = require("http");
const PORT = 3000;
const router = require("./router");

//Why does the network tab not show any details of any requests?
const server = http.createServer((request, response) => {
  //Where does the request corresponding to favicon,ico come from?
  router(request, response);
});

server.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));
