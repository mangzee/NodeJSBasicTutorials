var fs=require("fs");//filesystem
//sync
console.log("starting..");
var content=fs.readFileSync("sample.txt");
console.log("Content :"+content);
console.log("carry on executing..");
