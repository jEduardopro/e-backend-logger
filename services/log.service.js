const Log = require('../models/Log');

class LogService {

	async getLogs(application_id) {
		const logs = await Log.find({ application_id });
		return logs;
	}

	async create(data) {
		const log = await Log.create(data);
		return log;
	}

}

module.exports = new LogService();