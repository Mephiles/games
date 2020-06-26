// npm install --save-dev express body-parser mongoose passport passport-local passport-local-mongoose connect-flash express-session serve-favicon minimist ejs
console.log("SERVER START");

// ==========================================
// SETTINGS
// ==========================================

const serverPORT = 8082;
console.log(`Server PORT: ${serverPORT}`);

// ==========================================
// SETUP
// ==========================================

console.log("Setup..");

// LIBRARIES
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var flash = require('connect-flash');
var expressSession = require("express-session");
var favicon = require('serve-favicon');

// MODELS & SCRIPTS

// MIDDLEWARE
app.use(favicon('./public/favicon.ico'));
app.use(expressSession({
    secret: "___random_text_here___",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());
app.use(function(req, res, next){
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    res.locals.user = req.user;
    next();
});

// ==========================================
// DATABASE
// ==========================================

// ==========================================
// PASSPORT
// ==========================================

// ==========================================
// LOGIC
// ==========================================

// ==========================================
// ROUTES
// ==========================================

console.log(`Linking route files..`);
try{
	var sitesRoutes = require("./routes/sites");

	app.use(sitesRoutes);

	app.get("*", function(req, res){
	    res.render("notfound");
	});
} catch(err){
	logError(err);
}

// ==========================================
// SERVER LISTENING
// ==========================================

console.log(`INITIALIZING SERVER`);
try{
	app.listen(serverPORT, function(){
	    console.log(`Listening on port ${serverPORT}`);
	});
} catch(err){
	logError(err);
}

// ==========================================
// TESTING
// ==========================================

// ==========================================
// FUNCTIONS
// ==========================================

function logError(err){
	console.log(`Failed..`);
	console.log("------------------------");
	console.log(err);
	console.log("------------------------");
}
