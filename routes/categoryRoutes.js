const express = require("express");
const fetchCategoriesController = require("../controllers/fetchCategoriesController");
const addCategoryController = require("../controllers/addCategoryController");
const router = express.Router();

router.get("/all",fetchCategoriesController);
router.post("/add",addCategoryController);
//todo may need to add a route for deleting categories, however, this can be done directly through mongoDB
module.exports = router;