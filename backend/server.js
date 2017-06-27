var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo =require('mongodb');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/loginapp');
var db= mongoose.connection;

const app = express();
const users = require('./routes/users');

//Port number
const port = 3000;

// CORS Middleware
app.use(cors());

//Body parser Middleware
app.use(bodyParser.json);

app.use('/users',users);

//Index Routing
app.get('/',(req,res)=>{
    res.send('invalid end point');
});

//Start Server
app.listen(port,()=>{
    console.log('Server started on ' +port);
})