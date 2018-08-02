process.on('message',function(m){
	console.log('child got message:', m.hello);
});
process.send({foo:'bar'});
