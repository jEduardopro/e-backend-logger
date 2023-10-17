'use strinct';
const validator = require('../validations/validator');
const logSchema = require('../validations/log.schema');
const logService = require('../services/log.service');

class MainController {

	all(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	async create(req, res, next) {
		const payload = {...req.body, application_id: req.application_id}
		const { error } = validator(logSchema, payload);
		if (error) {
			return res.status(422).json(error.details)
		}
		const log = await logService.create(payload);
		res.json({ message: 'Log created.', log });
	}

	info(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	update(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	delete(req, res, next) {
		res.json({ message: 'Example request.' });
	}
}

module.exports = new MainController();
