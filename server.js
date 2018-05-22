// set NODE_ENV environment variable at cmd prompt. e.g., set NODE_ENV = production
// port defined in server/config/env/*.js file
process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // has to be before config coz config reads it
var config = require("./server/config/config");
const express = require("express"),
  morgan = require("morgan"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  compress = require("compression"),
  mongoose = require("mongoose"),
  session = require("express-session"),
  path = require("path"),
  favicon = require("serve-favicon"),
  errorHandler = require("errorhandler"),
  flash = require("connect-flash"),
  locale = require("locale"),
  supported = ["en", "en_US", "zh-hant"],

  //var index = require('./routes/index');
  //var users = require('./routes/users');

  app = express();

app.use(locale(supported, "en"));
// for routing
var ifttt = require("./server/routes/ifttt");

const publicWeb = process.env.PUBLICWEB || "./dist";

mongoose.connect(config.db, { safe: true }, function (err) {
  if (err) {
    console.error("connection error", err);
  } else {
    console.log("connection successful");
  }
});

//require('./server/config/strategies/passport')(passport); // pass passport for configuration
// Parsing environment variables
// var options = {};

if (process.env.NODE_ENV === "development") {
  // logging request details
  app.use(morgan("dev"));
  app.use(errorHandler());
} else if (process.env.NODE_ENV === "production") {
  app.use(compress());
}

// define middleware
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cookieParser()); // read cookie (needed for auth)
app.use(bodyParser.urlencoded({ extended: false })); // get info form htlm form
app.use(bodyParser.json());

/*
app.use('/', express.static(path.join(__dirname, 'public')));
// telling browser to cache it
app.use('/', function(req, res, next) {
  res.setHeader('Cache-Control', 'public, max-age=31536000');
  next();
});
*/
app.use("/ifttt/bea", ifttt);

// app.use(express.static(__dirname + '/dist'));
app.use('/zh-hant', express.static(path.join(__dirname, '/dist/zh-hant/')));
app.use('/en-US', express.static(path.join(__dirname, '/dist/en-US')));

// Return index.html for all GET requests for PathLocationStrategy
// And accept locale style URLs: /en/example

app.get('*', (req, res) => {
  // const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
  // const locale = matches && supportedLocales.indexOf(matches[1]) !== -1 ? matches[1] : req.locale;
  let locale = req.locale === 'zh-hant'? req.locale: 'en-US';
  console.log('you ask for: ', req.headers["accept-language"]); 
  console.log('locale: ', locale);
  // app.use(express.static(path.join(__dirname, `/dist/${locale}/`)));
  res.sendFile(path.join(__dirname, `/dist/${locale}/index.html`));
});


app.listen(config.port, function (req, res) {
  console.info("Server running at http://localhost: " + config.port);
});

/*
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/zh-hant/index.html'));
});
*/


