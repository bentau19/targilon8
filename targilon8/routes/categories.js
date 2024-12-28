const express = require('express');
var router = express.Router();
const categories = require('../controllers/categories');
router.route('/')
.get(categories.getCategories)
.post(categories.createCategories);
router.route('/:id')
.get(categories.getCategories)
.patch(categories.updateCategories)
.delete(categories.deleteCategories);
module.exports = router;