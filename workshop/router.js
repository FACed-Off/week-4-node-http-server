const homeHandler = require("./handlers/home");
const goodbyeHandler = require("./handlers/goodbye");
const helloHandler = require("./handlers/hello");
const missingHandler = require("./handlers/missing");

function router(request, response) {
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
}

module.exports = router;
