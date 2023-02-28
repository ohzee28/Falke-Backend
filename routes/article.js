const express = require('express');
const router = express.Router();
const firebaseUploader = require("../middlewares/upload");

const {
    getAllArticles,
    getSingleArticle,
    createArticle,
    updateArticle,
    deleteArticle,
} = require("../controllers/article");

router.route("/articles").get(getAllArticles).post(firebaseUploader.single("image"),createArticle);
router
    .route("/articles/:id")
    .get(getSingleArticle)
    .put(updateArticle)
    .delete(deleteArticle);

module.exports = router;