function submitHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Thank you for submitting</h1>");
}

module.exports = submitHandler;
