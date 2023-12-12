const express = require('express');
const ClassController = require('../controllers/classController');

const router = express.Router();

// router.use(authController.protect);

router
    .route('/')
    .get(ClassController.getAllClasses)
    .post(ClassController.createClasses);

router
    .route('/:id')
    .get(ClassController.getAllClasses)
    .patch(ClassController.updateClasses)
    .delete(ClassController.deleteClasses);

module.exports = router;
