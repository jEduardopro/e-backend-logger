const Log = require('../models/Log');

class LogService {

	async create(data) {
		const log = await Log.create(data);
		return log;
	}

}

module.exports = new LogService();