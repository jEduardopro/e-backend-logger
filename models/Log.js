const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({

	application_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Application',
		required: true,
	},

	type: {
		type: String,
		required: true,
		enum: ['error', 'info', 'warning'],
	},

	priority: {
		type: String,
		required: true,
		enum: ['lowest', 'low', 'medium', 'high', 'highest'],
	},

	path: {
		type: String,
		required: true,
		trim: true,
	},

	message: {
		type: String,
		required: true,
		trim: true,
	},

	request: {
		type: Object,
		required: true,
	},

	response: {
		type: Object,
		required: true,
	},

}, {
	versionKey: false,
	timestamps: true,
})

module.exports = mongoose.model('Log', LogSchema);