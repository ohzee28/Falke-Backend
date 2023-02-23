require("dotenv").config();
const cors = require("cors");
const express = require('express');
const app = express();
const articleRouter = require("./routes/article");
const db = require('./db/db')

const port = process.env.PORT || 8080;
//test
db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", articleRouter);

app.get('/', function (req, res) {
    res.send('FALKE Backend');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});