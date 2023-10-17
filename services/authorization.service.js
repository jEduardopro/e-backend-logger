const Authorization = require('../models/Authorization');
const generateJWT = require('../utils/jwt.handler');

class AuthorizationService {

	async create(applicationId) {

		const token = generateJWT(applicationId)

		const authorization = await Authorization.create(
			{
				application_id: applicationId,
				token
			}
		);
		return authorization;
	}

	async findAuthByToken(token) {
		const authorization = await Authorization.findOne({ token: token });
		return authorization;
	}

}

module.exports = new AuthorizationService();