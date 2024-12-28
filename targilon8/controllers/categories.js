const CategoriesService = require('../services/categories');
const createCategories = async (req, res) => {
res.json(await CategoriesService.createCategories(req.body.title));
};
const getCategories = async (req, res) => {
res.json(await CategoriesService.getCategories());
};
const getCategorie = async (req, res) => {
const article = await CategoriesService.getCategorieseById(req.params.id);
if (!article) {
return res.status(404).json({ errors: ['Categories not found'] });
}
res.json(article);
};
const updateCategories = async (req, res) => {
    res.json(await CategoriesService.updateCategories(req.params.id,req.body.title));
    };
const deleteCategories = async (req, res) => {
    res.json(await CategoriesService.deleteCategories(req.params.id));
    };
//...
module.exports = {createCategories, getCategorie, getCategories, updateCategories, deleteCategories };