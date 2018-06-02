var mongoose = require('mongoose');

var prodSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
		default: ''
	},
	url: {
    type: String,
    default: ''
	},
	published: {
		type: String,
		required: true,
		default: ''
	},
});

// order schema should be created late on for order management

// use the schema instance to define your Prods model
/* Mongoose automatically looks for the plural version of your model name. Thus, for the example above, the model user is for the users collection in the database.
** declare a model called Prods which has schema prodSchema
 */
module.exports = mongoose.model('Prods', prodSchema);
