const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const {database} = require('./keys');
const customerRoute = require('./routes/customerRoute');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(myConnection(mysql, database, 'single'));
app.use(express.urlencoded({extended: false}));
app.use('/', customerRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log('SERVER ON PORT: ', app.get('port'));
});