const { URLSearchParams, URL } = require("url");

function submitHandler(request, response) {
  let body = "";
  request.on("data", (chunk) => {
    body += chunk;
    //With what request will this console.log be called multiple times?
    // console.log(chunk);
    //response.send("Error", 500);
  });
  request.on("end", () => {
    // console.log("url ", request.url);
    // const url = new URL(request.url, "http://localhost:3000");
    // const searchParams = url.searchParams;
    // console.log("sp:", searchParams);
    // const data = new URLSearchParams(searchParams);
    const data = new URLSearchParams(body);
    const name = data.get("name");
    console.log("name:", name);
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`<h1>Hello ${name}</h1>`);
  });
  request.on("error", (error) => {
    response.writeHead(500, { "content-type": "text/html" });
    response.end(`<h1>${error}</h1>`);
  });
}

module.exports = submitHandler;
