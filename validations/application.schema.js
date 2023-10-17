const Joi = require('joi');

const applicationSchema = Joi.object({
	name: Joi.string().required(),
})

module.exports = applicationSchema;