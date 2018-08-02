var http = require('http');

var options = {
	host:'www.pluralsight.com',
	port:80,
	path:'/',
	method:'GET'
};

console.log("going to make request");

var req = http.request("http://www.pluralsight.com/",function(response){
	console.log(response.statusCode);
	//response.pipe(process.stdout);
});

var reqa = http.request(options,function(response){
	console.log(response.statusCode);
	//response.pipe(process.stdout);
});

req.end();
reqa.end();

var endRequestNotRequired = http.get(options,function(response){
	console.log(response.statusCode);
});