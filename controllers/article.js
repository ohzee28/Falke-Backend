const Article = require("../models/Article");

const getAllArticles = async (req, res) => {
    try {
        const article = await Article.find();
        res.status(200).json(article);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const createArticle = async (req, res) => {
    console.log('in controller', req.file)
    const { date, body, author, headline } = req.body;
    const { file } = req;
    try {
        const newArticle = await Article.create({ date, body, author, headline, image: file.publicUrl });
        res.status(201).json(newArticle);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};


const getSingleArticle = async (req, res) => {
    const { id } = req.params;
    try {
        const article = await Article.findById(id);
        res.status(200).json(article);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const updateArticle = async (req, res) => {
    const { id } = req.params;
    const { date, body, author, headline } = req.body;
    try {
        const updateArticle = await Article.findByIdAndUpdate(id, { date, body, author, headline },
            { new: true });
        res.status(200).json(updateArticle);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const deleteArticle = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedArticle = await Article.findByIdAndDelete(id);
        res.status(200).send(`The Article ${deletedArticle._id} has been deleted.`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}
    ;

module.exports = {
    getAllArticles,
    createArticle,
    getSingleArticle,
    updateArticle,
    deleteArticle,
};