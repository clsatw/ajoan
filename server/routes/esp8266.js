'use strict';
var express = require('express');
// var bodyParser = require('body-parser');
//var parseUrlEncoded = bodyParser.urlencoded({ extended: true });
var WaterPump = require('../models/waterpump.model');
//console.log(WaterPump);

// returens router instanace which can be mounted as a middleware
var router = express.Router();
var bodyParser = require('body-parser');
// var parseUrlEncoded = bodyParser.urlencoded({ extended: false });
let parseJsonEncoded = bodyParser.json()
// the root path relative to the path where it's mounted.
router.route('/')
	// get all the users when a method passed is GET
	.get(function (req, res) {
		console.log('water pump get');
		WaterPump.find((err, data)=> {
			if (err)
				res.status(500).send(err);
			res.status(200).json(data);
		})
	})
	// create a prod when the method passed is POST
	.post(parseJsonEncoded, (req, res)=> {
		console.log(req.body);
		// create a new instance of the user model
		// it should be req.body not req.data as there is no data property in req object
		var data = new WaterPump(req.body); // WaterPump is a schema constructor

		// save the data received
		data.save(function (err) {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}
			// give some success message
			//console.log(data);
			res.status(200).json(data);
		})
	});

// on accessing user Route by id
router.route('/:devId')
	// get the user by id
	.get(function (req, res) {
    // WaterPump.findById(req.params.id, function (err, data) {
    // findOne is for returing a {} json object instead of [{}], so
    // in arduino parsejosn won't fail.
    WaterPump.findOne({ devId: req.params.devId }, (err, data)=> {
			if (err) {
				return res.status(500).send(err);
			}
			res.status(200).json(data);
		})
	})
	// update the user by id
	.put(function (req, res) {
		/*
		console.log(req.params.user_id);
		WaterPump.findById(req.params.user_id, function(err, data) {
			if (err)
				res.send(err);

			// set the users properties (comes from the request)
			var data = new WaterPump(req.body); // WaterPump is a schema constructor

			// save the data received
			data.save(function(err) {
				if (err)
					res.send(err);
				// give some success message
				//res.json(data);
				res.end();
			});
		})
		*/
		WaterPump.findByIdAndUpdate(req.params.devId, req.body, function (err, post) {
			console.log(req.body);
			if (err) return next(err);
			res.status(200).json(post);
		});
	})
	.delete(parseJsonEncoded, (req, res)=> {
		console.log(req.params.devId);
		WaterPump.remove({
			devId: req.params.devId
		}, (err, data)=> {
			if (err) {
				res.status(500).send(err);
			}
			else {
				// give some success message
				//res.sendStatus(200);
				res.status(200).json(data);
			}
		})
	});

// exports the router as a Node module
module.exports = router;
