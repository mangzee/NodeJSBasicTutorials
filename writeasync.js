var fs=require("fs");
console.log("starting");
fs.writeFile("./write.txt","Hello world async",function(err){ console.log(err)});
console.log("Carry On Async ..");
