const express = require('express');
const formController = require('../controllers/formController');
const router = express.Router();

router.route('/forms-list').get(formController.getFormsList);
router.route('/all-forms').get(formController.getAll);
router
  .route('/form/:id')
  .get(formController.getForm)
  .patch(formController.updateForm);

router
  .route('/form')
  /* .get(formController.createForm) */
  .post(formController.createForm);

module.exports = router;
