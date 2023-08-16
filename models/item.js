const mongoose = require('mongoose');
// Ensure the category model is processed by mongoose
require('./category');

const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);
