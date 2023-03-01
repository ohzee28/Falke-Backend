const mongoose = require('mongoose');

//1.Schema aus Libary destrukturieren
const { Schema } = mongoose;

//2.Neue Schema Instanz erstellen
const Team = new Schema({
    teamname: {
        type: String,
    },

    image: {
        type: String,
    }

});

//3.Schema als Model exportieren ('Collectionname', Schema)
module.exports = mongoose.model('falketeams', Team, 'falketeams');