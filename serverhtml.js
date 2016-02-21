var http=require("http");
var fs=require("fs");
console.log("starting ...");
var host="127.0.0.1";
var port=1234;
var server=http.createServer(function(request,response){
console.log("Request recieved: "+request.url);
fs.readFile("D:/RnDProjects/NodeJS/NodeJSTut/"+request.url,function(error,data){
if(error)
{
response.writeHead(404,{"Content-type":"text/plain"});
response.end("File Not Found Sorry.!!"+error);
}
else
{
response.writeHead(404,{"Content-type":"text/html"});
response.end(data);
}
});

});//calls for each request for anypage
server.listen(port,host,function(){
console.log("Listening :"+host+":"+port);
});
