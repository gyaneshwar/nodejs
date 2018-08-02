var cp = require("child_process");
var n = cp.fork(__dirname + '/child.js');

n.on('message',function(m){
	console.log('parent got message'+m.foo);
	n.send({hello:'bro'});
})

n.send({ hello:'world'});