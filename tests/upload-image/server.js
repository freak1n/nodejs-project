var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	console.log("PEsho");
	response.end();
}).listen(8888);

	// var http = require("http");

	// function onRequest(request, response) {
	// 	response.writeHead(200, {"Content-Type": "text/pain"});
	// 	response.write("Hello World!");
	// 	response.end;
	// }

	// http.createServer(onRequest).listen(8888);

/*var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");*/