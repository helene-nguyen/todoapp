//!dotenv
require('dotenv').config();

//~import modules
const express = require('express');
const app = express();
const session = require('express-session');
const router = require('./app/routers')

//~templates motor
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

//~statics
app.use('/', express.static(__dirname + '/assets'));

//~url encoded
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//~session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {}
}));

//*middlewares


//*launch app
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running server on http://localhost:${PORT}`);
})