const mongoose = require("mongoose");

//Connectionstring MongoDB: zwischen / und ? die Collection spezifizieren:

//.....mongodb.net/mycollectionname?.....

const db = async (req, res) => {
    try {
        const URI = process.env.MONGO_URI;
        mongoose.set("strictQuery", true); //strictQuery - Begrenzt es auf die vorgegebenen Einträge der Collection, kann also nicht geändert werden
        mongoose.connect(URI);
        console.log("Connected to DB");
    } catch (err) {
        console.log(err);
        req.status(500).send("Could not connect to DB");
    }
}

module.exports = db;