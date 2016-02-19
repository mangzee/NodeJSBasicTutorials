var fs=require("fs");
console.log("starting");
var config=JSON.parse(fs.readFileSync("config.json"));
console.log("Config:"+config);
fs.watchFile("config.json",function(curent,previous){
console.log("Config is changed");
var config=JSON.parse(fs.readFileSync("config.json"));
console.log("Config:"+config);
});