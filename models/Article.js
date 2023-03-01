const mongoose = require('mongoose');

//1.Schema aus Libary destrukturieren
const { Schema } = mongoose;

//2.Neue Schema Instanz erstellen
const Article = new Schema({
    date: {
        type: Date,
        default: new Date(),
    },
    headline: {
        type: String,
        required: true,
        maxLength: 50,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }


});

//3.Schema als Model exportieren ('Collectionname', Schema)
module.exports = mongoose.model('falkenews', Article, 'falkenews');

