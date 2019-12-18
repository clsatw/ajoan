var express = require('express');

// returens router instanace which can be mounted as a middleware
let routes = function (WaterPump) {
	let router = express.Router();
	// the root path relative to the path where it's mounted.
	router.route('/')
		// get all the users when a method passed is GET
		.get((req, res) => {
			// http://localhost:5000/pump/?dev=001 will also work
			let query = {};
			if (req.query.devId) {
				query.devId = req.query.devId;
				console.log(query.devId);
			}
			// usage: localhost:5000/pump?action=true
			WaterPump.find(query, (err, data) => {
				if (err) {
					res.status(500).send(err);
				} else {
					let retTasks = [];
					data.forEach((element, index, array) => {
						let newData = element.toJSON();	//convert mongoose model to json.
						newData.links = {};
						newData.links.self = `http://${req.headers.host}/pump/${newData.devId}`;
						retTasks.push(newData);
					});
					res.status(200).json(retTasks);	// append a link to itself for users' reference.
				}
			})
		})
		// create a prod when the method passed is POST
		// postman - header (application/json, body-{"devId": "002" })
		.post((req, res) => {
			console.log(req.body);
			// create a new instance of the user model
			// it should be req.body not req.data as there is no data property in req object
			var data = new WaterPump(req.body); // WaterPump is a schema constructor

			// save the data received
			data.save((err, data) => {
				if (err) {
					console.log(err);
					return res.status(500).send(err);
				}
				// give some success message
				//console.log(data);
				res.status(201).json(data);
			})
		});

	// on accessing user Route by id
	// localhost:5000/pump/001
	router.use('/:devId', (req, res, next) => {
		console.log(req.params.devId);
		// findOne is for returing a {} json object instead of [{}], so
		// in arduino parsejosn won't fail.
		WaterPump.findOne({ devId: req.params.devId }, (err, data) => {
			if (err)
				res.status(500).send(err);
			else if (data) {
				req.data = data;
				next();
			} else {
				res.status(404).send('not found');
			}
		})
	})
	
	router.route('/:devId')
		// get the user by id, here id is auto created
		.get((req, res) => {
			let retTask = req.data.toJSON();
			retTask.links={}
			let newLink = `http://${req.headers.host}/pump/?devId=${retTask.devId}`;
			retTask.links.FilterByThisDevId = newLink.replace(' ', '%20');
			res.json(retTask);
		})
		// update the user by id
		.put((req, res) => {
			req.data = req.body;
			// for(let i in req.body){req.data[i]=req.body[i]}
			req.data.save((err) => {
				if (err)
					res.status(500).send(err);
				else
					res.json(req.data);
			});
			res.json(req.data);
			/*			
			WaterPump.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
				console.log(req.body);
				if (err) return next(err);
				res.status(200).json(post);
			});
			*/
		})
		// localhost:5000/pump/001
		.delete((req, res) => {
			console.log(req.params.devId);
			WaterPump.remove({ devId: req.params.devId }, (err) => {
				if (err) {
					res.status(500).send(err);
				}
				else {
					// give some success message
					//res.sendStatus(200);
					res.status(204).json('removed');
				}
			})
		});
	return router;
}
// exports the router as a Node module
module.exports = routes;
