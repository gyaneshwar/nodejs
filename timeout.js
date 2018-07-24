setTimeout(function(){
	console.log("hello");
},1000);

console.log("hello");

function Mindtree(a, b, c){
	this.a = a;
	this.b = b;
	this.c = c;

	this.addition =function(){
     	return this.a+ this.b + this.c;
	}

	this.additionOfWords = function(){
		return a+b+c;
	}
}

var obj = new Mindtree(1,2,3);
console.log(obj.addition());
console.log(obj.additionOfWords());