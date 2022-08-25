const url = require("url");
const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    let filePath = url.parse(request.url);
    logger(filePath.pathname);
    if (filePath.pathname == "/documentation") {
      filePath = "./documentation.html";
    } else {
      filePath = "./index.html";
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("error: file not found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(content, "utf-8");
      }
    });
  })
  .listen(8080);

function logger(url) {
  let timeStamp = Date();
  let content = "\nURL: " + url + "\n Timestamp: " + timeStamp + "\n";
  fs.appendFile("log.txt", content, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("log updated");
    }
  });
}

console.log("My first Node test server is running on Port 8080.");

fs.readFile("input.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("File content: " + data.toString());
});

// ECHO is on.
