const jwt = require('jsonwebtoken');

const generateJWT = (id) => {
	return jwt.sign({
		id
	}, process.env.JWT_SECRET || 'secretkey', {
		expiresIn: '1d'
	})
}

module.exports = generateJWT
