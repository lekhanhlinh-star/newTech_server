const classes = require('../models/classesModel');
const factory = require('./handlerFactory');

exports.getAllClasses = factory.getAll(classes);
exports.getClasses= factory.getOne(classes);
exports.createClasses = factory.createOne(classes);
exports.updateClasses = factory.updateOne(classes);
exports.deleteClasses = factory.deleteOne(classes);