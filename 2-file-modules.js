var mathfun = require('./mathfun');


var handleResults = function(err,results,time){
	if(err){
		console.log("Error :" + err.message);
	} else {
		console.log("The results are :" + results + " (" + time +" ms) ");
	}
}
var count = 0;
for (var i = 0; i <= 10; i++) {
	console.log("Calling event" + i);
mathfun.eventDoubler(i,handleResults);	
};

console.log("---------");