'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-service');

router.get('/', authService.authorize ,controller.get);
router.get('/:slug', authService.authorize ,controller.getBySlug);
router.get('/tag/:tag', authService.authorize ,controller.getByTag);
router.get('/admin/:id', authService.authorize ,controller.getById);
router.post('/', authService.isAdmin , controller.post);
router.put('/:id', authService.isAdmin ,controller.put);
router.delete('/:id', authService.isAdmin ,controller.delete);

module.exports = router;
