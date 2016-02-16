var fs=require("fs");
console.log("starting...");
var contents=fs.readFileSync("config.json");
console.log("Contents :"+contents);
var config=JSON.parse(contents);
console.log("config:"+config);
console.log("UserName:"+ config.username);