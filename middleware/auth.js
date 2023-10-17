const authorizationService = require('../services/authorization.service');

const auth = async (req, res, next) => {
	try {
		const jwtAuth = req.headers.authorization;
		if (!jwtAuth || !jwtAuth.startsWith('Bearer ')) {
			return res.status(401).json({ message: 'Unauthorized.' });
		}

		const token = jwtAuth.split(' ')[1];
		if (!token) {
			return res.status(401).json({ message: 'Unauthorized.' });
		}
	
		const authorization = await authorizationService.findAuthByToken(token);
		if (!authorization) {
			return res.status(401).json({ message: 'Unauthorized.' });
		}
	
		req.application_id = authorization.application_id.toString();
		next();
	} catch (error) {
		res.status(401).json({ message: 'Unauthorized.' })
	}
}

module.exports = auth;