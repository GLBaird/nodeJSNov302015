// imports
var express    = require("express");
var path       = require("path");

// routes
var blogs      = require("./routes/blogs");

// setup router and server
var app = express();

// routes and middleware
app.use(function(req, res, next) {
    console.log("Incoming request: "+req.originalUrl);
    next();
});

app.use("/home", function(req, res) {
    res.send("<h1>Home</h1>");
});

app.use("/about", function(req, res) {
    res.send("<h1>About</h1>");
});

app.use("/sayhello/:name/:other", function(req, res) {
    res.send("Hi there "+req.params.name+" and "+req.params.other);
});

// Send to blogs route for APIs
app.use("/blogs", blogs);

app.use( express.static( path.join(__dirname, "public") ) );

app.use("*", function (req, res) {
    res.status(404).send("<h1>Server Error</h1><p>404 File Not Found</p>");
});

// start server
app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});