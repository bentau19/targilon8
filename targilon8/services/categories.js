const Categories = require('../models/categories');
const createCategories = async (title, published) => {
const categories = new Categories({ title : title });
if (published) categories.published = published;
return await categories.save();
};
const getCategoriesById = async (id) => { return await Categories.findById(id); };
const getCategories = async () => { return await Categories.find({}); };
const updateCategories = async (id, title) => {
const categories = await getCategoriesById(id);
if (!categories) return null;
categories.title = title;
await categories.save();
return categories;
};
const deleteCategories = async (id) => {
const categories = await getCategoriesById(id);
if (!categories) return null;
await categories.deleteOne();
return categories;
};
module.exports = {createCategories, getCategoriesById, getCategories, updateCategories, deleteCategories }