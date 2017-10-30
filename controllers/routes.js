var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');
 //Set routes
 router.get('/', function(req, res){
 	burger.selectAll(function(burger_data){
 	console.log( " Burger Data = " + burger_info);	
 	res.render('index', {burger_info});
 	})
 	router.put('/burgers/update', function(req, res){
 	burgers.update(req.body.burgers, function(result) {
 		console.log(result);
 		res.redirect('/');
 	});	
 	
 });
 module.exports = router;