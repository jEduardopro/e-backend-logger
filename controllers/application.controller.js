'use strinct';
const validator = require('../validations/validator');
const applicationSchema = require('../validations/application.schema');
const applicationService = require('../services/application.service');
const authorizationService = require('../services/authorization.service');

class ApplicationController {

	async create(req, res, next) {
		const { error } = validator(applicationSchema, req.body);
		if (error) {
			return res.status(422).json(error.details)
		}
		const application = await applicationService.create(req);
		const authorization = await authorizationService.create(application.id);
		res.json({ message: 'Application created.', access_token: authorization.token });
	}
}

module.exports = new ApplicationController();
