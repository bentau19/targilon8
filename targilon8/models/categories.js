const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Categories = new Schema({
title : {
type: String,
required: true
},
published: {
type: Date,
default: Date.now
}
});
module.exports = mongoose.model('Categories', Article);