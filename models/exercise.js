const mongoose = require('mongoose');
// Ensure the category model is processed by mongoose
require('./category');

const exerciseSchema = require('./exerciseSchema');

module.exports = mongoose.model('Exercise', exerciseSchema);
