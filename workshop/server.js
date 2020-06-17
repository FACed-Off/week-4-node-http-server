const http = require("http");
const PORT = 3000;

const server = http.createServer((request, response) => {
  response.end("hello");
});

server.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));
