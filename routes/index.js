module.exports = function(app) {
	var nodemailer = require('nodemailer');
	var asynq = require('async');

	app.post('/send-email', (req, res) => {
		console.log('coming info ', req.body);
	});
};

// successRedirect: '../send-email', // redirect to the secure profile section
// failureRedirect: '../send-email', // redirect back to the signup page if there is an error
// failureFlash: true, // allow flash messages

// var Email = require('/send-email');
// var newEmail = new Email();

// newEmail.to = req.body.to;
// newEmail.subject = req.body.subject;
// newEmail.commentrs = req.body.comments;

// newEmail.save();

// res.redirect('/');
