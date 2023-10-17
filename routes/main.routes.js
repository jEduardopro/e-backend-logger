'use strict';

const router = require('express').Router();
const auth = require('../middleware/auth');
const prefix = '/logs';

const controller = require('../controllers/main.controller');
const applicationController = require('../controllers/application.controller');

router.post(`/applications`, applicationController.create);

router.use(auth)
	.get(`${prefix}/`, controller.all)
	.post(`${prefix}/`, controller.create)
	.get(`${prefix}/:id`, controller.info)
	.put(`${prefix}/:id`, controller.update)
	.delete(`${prefix}/:id`, controller.delete)

module.exports = router;