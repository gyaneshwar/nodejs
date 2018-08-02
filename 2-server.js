var fs = require('fs');

var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	if(req.url === '/google.html')
		fs.createReadStream(__dirname+'/google.html').pipe(res);
	else
		res.end("hello world");
}).listen(8000,'localhost');