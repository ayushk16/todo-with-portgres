// require node modules
const express = require("express");
var bodyParser = require('body-parser')
require('dotenv').config();

// routes
const apiRoutes = require("./routes/router.js");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route
app.get('/', (req, res) => {
    res.status(200).json({ connectedToServer: PORT });
})

// api routes
app.use('/todos', apiRoutes);


// listening
app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
})