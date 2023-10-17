'use strinct';
const validator = require('../validations/validator');
const logSchema = require('../validations/log.schema');
const logService = require('../services/log.service');

class MainController {

	async all(req, res, next) {
		const logs = await logService.getLogs(req.application_id);
		res.json({ data: logs });
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

	async info(req, res, next) {
		const log = await logService.find(req.params.id);
		res.json(log);
	}

	async update(req, res, next) {
		const payload = {...req.body, application_id: req.application_id}
		const { error } = validator(logSchema, payload);
		if (error) {
			return res.status(422).json(error.details)
		}
		const log = await logService.update(req.params.id, payload);
		if (!log) {
			return res.status(404).json({ message: 'Log not found.' });
		}
		res.json({ message: 'Log updated.', log });
	}

	async delete(req, res, next) {
		await logService.destroy(req.params.id);
		res.json({ message: 'Log deleted.' });
	}
}

module.exports = new MainController();
