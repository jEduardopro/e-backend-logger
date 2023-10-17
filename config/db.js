const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/e-backend-logger';
		const conn = await mongoose.connect(mongoURI);

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log('Error connecting to database: ', error.message);
	}
}

module.exports = connectDB;