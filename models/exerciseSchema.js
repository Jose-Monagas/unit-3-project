const mongoose = require('mongoose');
// Ensure the category model is processed by mongoose
require('./category');

const Schema = require('mongoose').Schema;

const exerciseSchema = new Schema(
	{
		name: { type: String, required: true },
		url: { type: String, required: true },
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		sets: { type: Number, required: true, default: 0 }
	},
	{
		timestamps: true
	}
);

module.exports = exerciseSchema;
