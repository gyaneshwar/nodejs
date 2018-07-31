var fs =require("fs");

if(fs.existsSync("temp")){
	console.log("directory exists, removing...");
	if(fs.existsSync('temp/new.txt'))
		fs.unlinkSync('temp/new.txt');
	fs.rmdirSync("temp");
}

fs.mkdirSync('temp');
if(fs.existsSync('temp')){
	process.chdir('temp');
	fs.writeFileSync('test.txt','this is some test txt gyane for the file');
	fs.renameSync('test.txt','new.txt');
	console.log(fs.statSync('new.txt'));
	console.log(fs.readFileSync('new.txt').toString());
}