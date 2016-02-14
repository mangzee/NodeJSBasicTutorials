var fs=require("fs");//filesystem
console.log("starting..");
//async
fs.readFile("sample.txt", function(error,data){
console.log("Contents :"+data);
});
console.log("carry on executing..");

//sync
console.log("starting..");
var content=fs.readFileSync("sample.txt");
console.log("Content :"+content);
console.log("carry on executing..");
