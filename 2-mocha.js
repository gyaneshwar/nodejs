var should = require('should');
var fun = require('./mathfun');

describe('MathFun',function(){
	describe('when use synchronously',function(){
		it('should double even number correctly',function(){
			fun.eventDoublerSync(2).should.equal(4);
		});

		it('should throw on odd number',function(done){
			(function(){ fun.eventDoublerSync(3);}).should.throw(/Odd/);
			done();
		});
	});

	describe('when use asynchronously',function(){
		it('should double even number correctly',function(){
			fun.eventDoubler(2,function(err,results){
				should.not.exist(err);
				results.should.equal(4);
				done();
			});
		});
		it('should return error on odd number',function(){

			fun.eventDoubler(3,function(err,results){
				should.exist(err);
				should.not.exist(results);
				done();
			});
		});
	});
});
