var maxTime = 1000;

//if input is even, double it
// if input is odd, throw error
//call will take random amount of time because of node event loop

function UserException(message){
	this.message = message;
}

var eventDoubler = function(v, callback){
	var waitTime = Math.floor(Math.random()*(maxTime + 1));

 if(v%2){
    setTimeout(function(){callback(new Error("Odd input"));}, waitTime);
 } else {
 	setTimeout(function(){callback(null,v*2,waitTime);}, waitTime);
 }
}

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
eventDoubler(i,handleResults);	
};

console.log("---------");