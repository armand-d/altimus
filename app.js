var express = require("express");
 
var app = express();
app.use(express.logger());

//Api
require('./api/clientsApi')(app);
require('./api/gameApi')(app);
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.get('/[a-z\-\/]{0,100}', function(request, response) {
  response.render('index.html')
});
//app.get('/accueil', function(request, response) {
//  response.render('index.html')
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




//Formulaire de contact
/*
var express = require('express');

mailer = require('express-mailer');
path = require('path'),
app = express();

app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(path))
app.engine('html', require('ejs').renderFile);


var mailer = require('express-mailer');

app.post('/contact', function(req, res, next){
	mailer.extend(app, {
		from: req.body.email,
		host: 'smtp.gmail.com',
		secureConnection false,
		port: 25,
		transportMethod: 'SMTP'
	});
	app.mailer.send('email', {
		to: 'contact@gmail.com',
		subject: req.body.subject,
		message: req.body.message
	}, function(err){
		if(err){
			console.log('Erreur'); return;
		}
		res.send('Email envoyé')
	});
});
*/