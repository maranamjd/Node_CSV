var express         = require('express');
var bodyParser      = require('body-parser');
var fs              = require('fs');
var app             = express();
var expressLayouts  = require('express-ejs-layouts');
var urlEncode       = bodyParser.urlencoded({extended: false});
var iconv           = require('iconv-lite');
var upload          = require('express-fileupload');

var messagesController  = require('./controllers/messagesController');
var routesController    = require('./controllers/routesController');
var functionsController = require('./controllers/functionsController');


app.use(upload());
app.use(expressLayouts);
app.use('/assets', express.static('views/assets'));
app.set('view engine', 'ejs');


functionsController(app, urlEncode);
routesController(app, fs, iconv, urlEncode);
messagesController(app, urlEncode);


app. listen(3000);
console.log('listening to port 3000');
