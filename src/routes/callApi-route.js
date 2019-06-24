'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/callApi-controller');
//const authService = require('../services/auth-service');

console.log('callAPI-route::get::11111');

router.get('/' ,controller.get);

console.log('callAPI-route::get::22222');
//router.post('/', authService.authorize ,controller.post);

module.exports = router;
