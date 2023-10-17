const Application = require('../models/Application');

class ApplicationService {

	async create(req) {
		const { name } = req.body;
		const application = await Application.create({ name });
		return application;
	}

}

module.exports = new ApplicationService();