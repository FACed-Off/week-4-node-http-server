function submitHandler(request, response) {
  let body = "";
  request.on("data", (chunk) => {
    body += chunk;
    //With what request will this console.log be called multiple times?
    console.log(chunk);
  });
  request.on("end", () => {
    console.log("End:" + body);
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Thank you for submitting</h1>");
  });
}

module.exports = submitHandler;
