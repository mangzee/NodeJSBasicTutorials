var http=require("http");
console.log("starting ...");
var host="127.0.0.1";
var port=1234;
var server=http.createServer(function(request,response){
console.log("Request recieved: "+request.url);
response.writeHead(200,{"Content-type":"text/plain"});
response.write("Hello World.!!");
response.end();
});//calls for each request for anypage
server.listen(port,host,function(){
console.log("Listening :"+host+":"+port);
});
