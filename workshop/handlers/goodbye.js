function goodbyeHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Goodbye</h1>");
}

module.exports = goodbyeHandler;
