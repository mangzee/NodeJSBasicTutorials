var fs=require("fs");
console.log("starting..");
fs.writeFileSync("./write.txt","hello world sync");
console.log("over");