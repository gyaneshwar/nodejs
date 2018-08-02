var cluster = require('cluster');
var http = require('http');
var numworker = 2;

if(cluster.isMaster){
	for(var i = 0 ; i < numworker ; i++){
		console.log('master: about to fork a worker');
		cluster.fork();
	}

	cluster.on('fork',function(worker){
		console.log('master : fork event ( worker '+ worker.id + ')');
	});


	cluster.on('online',function(worker){
		console.log('master : online event ( worker '+worker.id + ')');
	});


	cluster.on('listening',function(worker, address){
		console.log('master : listening event ( worker '+worker.id + ')  worker pid :' + worker.process.pid);
	});


	cluster.on('exit',function(worker, code, signal){
		console.log('master : exit event ( worker '+worker.id + ')');
	});
} else {
	console.log('worker: worker #' + cluster.worker.id + 'ready!');

	var count = 0;

	http.createServer(function(req,res){
		res.writeHead(200);
		count++;
		res.end("hello world from "+cluster.worker.id + ' worker pid '+cluster.worker.process + " count : " + count);
		console.log("hello world from "+cluster.worker.id + ' worker pid '+cluster.worker.process + " count : " + count);
		if(count === 3){
			cluster.worker.destroy();
		}
	}).listen(8000,'localhost');
}