const Categories = require('../models/categories');
const createCategories = async (title, published) => {
const article = new Categories({ title : title });
if (published) article.published = published;
return await categories.save();
};
const getCategoriesById = async (id) => { return await Categories.findById(id); };
const getArticles = async () => { return await Categories.find({}); };
const updateCategories = async (id, title) => {
const categories = await CategoriesById(id);
if (!categories) return null;
categories.title = title;
await categories.save();
return categories;
};
const deleteCategories = async (id) => {
const categories = await getCategoriesById(id);
if (!categories) return null;
await categories.remove();
return categories;
};
module.exports = {createCategories, getCategoriesById, getArticles, updateCategories, deleteCategories }