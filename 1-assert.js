var assert = require("assert");
var fun =require('./mathfun');

assert.equal(fun.eventDoublerSync(2),4);
assert.throws(function(){
	fun.eventDoublerSync(3);
},/Odd/);

fun.eventDoubler(2,function(err,results){
	assert.ifError(err);
	assert.equal(results,4,"eventDoubler failed on even number");
});

fun.eventDoubler(3,function(err,results){
	assert.notEqual(err,null);
});