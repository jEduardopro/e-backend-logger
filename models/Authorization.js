const mongoose = require('mongoose');

const AuthorizationSchema = new mongoose.Schema({

	application_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Application',
		required: true,
	},

	token: {
		type: String,
		required: true,
		trim: true,
	},

}, {
	versionKey: false,
	timestamps: true,
})

module.exports = mongoose.model('Authorization', AuthorizationSchema);