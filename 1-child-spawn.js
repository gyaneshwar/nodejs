//doesnt work properly
var spawn = require('child_process').spawn,
dir = spawn('dir'),
print = spawn('print');

dir.stdout.pipe(print.stdin);
print.stdout.pipe(process.stdout);

dir.stderr.on('data',function(data){
	console.log('ps stderr' + data);
});

dir.stderr.on('data',function(data){
	console.log('grep stderr'+data);
});