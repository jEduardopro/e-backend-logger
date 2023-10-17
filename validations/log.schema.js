const Joi = require('joi');

const logSchema = Joi.object({
	application_id: Joi.string().required(),
	type: Joi.string().valid('error', 'info', 'warning').required(),
	priority: Joi.string().valid('lowest', 'low', 'medium', 'high', 'highest').required(),	
	path: Joi.string().required(),
	message: Joi.string().required(),
	request: Joi.object().required(),
	response: Joi.object().required()
})

module.exports = logSchema;