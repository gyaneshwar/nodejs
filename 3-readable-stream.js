var request = require('request');

var s = request('https://google.com');

s.on('data',function(chunk){
	console.log("data:"+chunk);

});


s.on('end',function(chunk){
	console.log("end:"+chunk);
	
});