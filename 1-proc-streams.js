process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on('data',function(chunk){
	process.stdout.write("data --> "+chunk);
});


process.stdin.on('end',function(){
	process.stdout.write("End ");
});


process.stdin.on('SIGTERM',function(chunk){
	process.stdout.write("why are you trying to terminate me!");
});

console.log("Node is running as process #"+process.pid);