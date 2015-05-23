var http = require('http');
//fs = require('fs');

/*fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
*/

    function send404Response(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404 - Page not found");
    response.end();
}
function onRequest(request, response) {

    if( request.method == 'GET' && request.url == '/' ){
        response.writeHead(200, {"Content-Type": "text/html"});

        fs.createReadStream("./index.html").pipe(response);
    }else{
        send404Response(response);
    }

}

function onRequest (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("u wot fam");
    response.end();
}

function pic(request, response) {

}


http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write("top kek ");
    response.write(html);
    response.end();
}).listen(1337,'127.0.0.1'  );


    //http.createServer(onRequest).listen(1337,'127.0.0.1');

console.log("server is running or is it ...............");
