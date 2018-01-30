// var fs = require('fs');
// var path = require('path');
// var config = JSON.parse(fs.readFileSync('config.json'));

var express = require('express');
var router = express.Router();
var http = require('http');
var app = express();
var server = http.createServer(app);

//purpose of this is to enable cross domain requests
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

require('./routes')(app);

server.listen(3000, () => {
	console.log('Listening on Port 3000');
});

// var nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
// 	service: 'gmail',
// 	secure: false,
// 	port: 25,
// 	auth: {
// 		user: 'fviclass@gmail.com',
// 		pass: 'fviclass2017',
// 	},
// 	tls: {
// 		rejectUnauthorized: false,
// 	},
// });

// let HelperOptions = {
// 	from: 'P Nunez' < 'panunezrip@gmail.com',
// 	to: 'panunezrip@gmail.com',
// 	subject: 'Test E-mail!',
// 	text: 'Email Test is working!',
// };

// transporter.sendMail(HelperOptions, (err, info) => {
// 	if (err) {
// 		return console.log(err);
// 	}
// 	console.log('The email was sent!');
// 	alert('The email was sent!');
// 	console.log(info);
// });
