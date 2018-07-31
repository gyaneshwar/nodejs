var request = require("request");
var fs = require('fs');

//var s = request("https://google.com");
//s.pipe(process.stdout);

//request("https://google.com").pipe(process.stdout);

request("https://google.com").pipe(fs.createWriteStream('google.html'));