let mongoose = require('mongoose');

var WaterPumpModel = mongoose.Schema({
	/*
	done: {
		type: Boolean,
		default: false
	},
	task: {
		type: [{
			type: String,
			enum: ['aquarium', 'waterPlant', 'feedPets']
		}],
		default: ['aquarium']
	},
	*/
	action: {
		type: Boolean,
		default: false
	},
	created_date: {
		type: Date,
		default: Date.new
	},
	devId: {
		unique: true,
		type: String,
		required: [true, 'why no device id'],
	}
});

// order schema should be created late on for order management

// use the schema instance to define your WaterPump model
/* Mongoose automatically looks for the plural version of your model name. Thus, for the example above, the model user is for the users collection in the database.
** declare a model called WaterPump which has schema WaterPumpchema
 */
module.exports = mongoose.model('WaterPump', WaterPumpModel);
