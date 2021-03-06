// set NODE_ENV environment variable at cmd prompt. e.g., set NODE_ENV = production
// port defined in server/config/env/*.js file
process.env.NODE_ENV = process.env.NODE_ENV || 'prod'; // has to be before config coz config reads it
var config = require("./server/config/config");
/*
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as compress from 'compress';
import * as path from 'path';
import * as session from 'express-session';
import * as locale from 'locale';
import * as errorHandler from 'errorhandler';
import * as flash from 'connect-flash';
import * as favicon from 'serve-favicon';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as helmet from 'melmet';
*/
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

app = express();

app.use(locale(supported, "en"));

const publicWeb = process.env.PUBLICWEB || "./dist";
const options = {
  server: {
    auto_reconnect: true,
    poolSize: 10
  },
  safe: true
}

mongoose.connect(config.db, options, err=> {
  if (err) {
    console.error("connection error", err);
  } else {
    console.log("connection successful");
  }
});

//require('./server/config/strategies/passport')(passport); // pass passport for configuration
// Parsing environment variables
// var options = {};

if (process.env.NODE_ENV === "dev") {
  // logging request details
  app.use(morgan("dev"));
  app.use(errorHandler());
} else if (process.env.NODE_ENV === "prod") {
  app.use(compress());
}

// define middleware
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cookieParser()); // read cookie (needed for auth)
app.use(bodyParser.urlencoded({ extended: true })); // get info form htlm form
app.use(bodyParser.json());

/*
app.use('/', express.static(path.join(__dirname, 'public')));
// telling browser to cache it
app.use('/', function(req, res, next) {
  res.setHeader('Cache-Control', 'public, max-age=31536000');
  next();
});
*/
// for routing
// const ifttt = require("./server/routes/ifttt");
let WaterPump = require('./server/models/waterpump.model');
let esp8266 = require('./server/routes/esp8266')(WaterPump);

// app.use("/ifttt/bea", ifttt);
app.use("/pump", esp8266);
app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.use('/zh-hant', express.static(path.join(__dirname, '/dist/zh-hant/')));
app.use('/zh-hans', express.static(path.join(__dirname, '/dist/zh-hans/')));
app.use('/en-US', express.static(path.join(__dirname, '/dist/en-US')));

// Return index.html for all GET requests for PathLocationStrategy
// And accept locale style URLs: /en/example

app.get('/', (req, res) => {
  let locale = '';
  // const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
  // const locale = matches && supportedLocales.indexOf(matches[1]) !== -1 ? matches[1] : req.locale;
  // let locale = req.locale === 'zh-hant'? req.locale: 'en-US';
  if (req.locale === 'zh-hant')
    locale = 'zh-hant';
  else if (req.locale === 'zh-hans')
    locale = 'zh-hans';
  else
    locale = 'en-US';

  console.log('you ask for: ', req.headers["accept-language"]);
  console.log('locale: ', locale);
  // app.use(express.static(path.join(__dirname, `/dist/${locale}/`)));
  res.sendFile(path.join(__dirname, `/dist/${locale}/index.html`));
});

/* why it listens to 5000 instead of 80 for production?
** coz linux only allow sudo server.js to listen to port 80, which has security concern
** the solution is portforwarding over nginx */

app.listen(5000, function (req, res) {
  console.info("Server running at http://localhost: " + config.port);
});

/*
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/zh-hant/index.html'));
});
*/


