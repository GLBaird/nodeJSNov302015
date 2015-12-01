console.log("App Running");

var demo = require("./demo_module");

demo.setValues(10, 20);

console.log("Answer = "+demo.getAnswer());


var users = require("./apis/users");

var apis = require("./apis");

apis.news.getInfo();

users.getInfo();


console.log("Arguments = "+process.argv);

var $ = require("jquery");