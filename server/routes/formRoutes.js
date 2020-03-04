const express = require('express');
const formController = require('../controllers/formController');
const router = express.Router();

router.route('/forms-list').get(formController.getFormsList);

router
  .route('/form/:formId')
  .get(formController.getForm)
  .patch(formController.updateForm);

router.route('/form').put(formController.createForm);

module.exports = router;
