const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controller/company.controller')

companyRouter.post('/', companyController.add);
companyRouter.get('/', companyController.get);


module.exports = companyRouter;