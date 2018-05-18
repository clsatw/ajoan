var mongoose = require('mongoose');

var WaterPumpchema = mongoose.Schema({
	action: {
		type: String,
		required: true,		
		default: 'off'
	},
});

// order schema should be created late on for order management

// use the schema instance to define your WaterPump model
/* Mongoose automatically looks for the plural version of your model name. Thus, for the example above, the model user is for the users collection in the database.
** declare a model called WaterPump which has schema WaterPumpchema
 */
module.exports = mongoose.model('WaterPump', WaterPumpchema);
