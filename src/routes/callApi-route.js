'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/callApi-controller');
//const authService = require('../services/auth-service');


router.get('/' ,controller.get);

//router.post('/', authService.authorize ,controller.post);

module.exports = router;
