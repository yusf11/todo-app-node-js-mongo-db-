var express = require('express');
var app = express();
var controlorjs = require('./todocontrolor/controlor.js')
//set view engine
app.set('view engine', 'ejs');
controlorjs(app);
//expres mid
app.use(express.static('./public'));
//listen to port
app.listen(3000);