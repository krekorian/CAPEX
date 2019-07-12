var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').config();
var exphbs = require('express-handlebars');
var flash = require('connect-flash');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session());

app.use(flash());


// app.get('/', function (req, res) {

//     res.send('Welcome to Passport with Sequelize');

// });




var models = require("./app/models");
require('./app/config/passport/passport.js')(passport, models.user);
//Sync Database
models.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});
var authRoute = require('./app/routes/auth.js')(app, passport);
var requestRoute = require('./app/routes/request')(app, passport);




app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');



app.listen(5000, function (err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});