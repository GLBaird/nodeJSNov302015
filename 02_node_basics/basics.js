var fs = require("fs");

var path = "demo.txt";

var fileText = "Hi there from nodeJS";

fs.writeFileSync(path, fileText);

console.log("File create and written");