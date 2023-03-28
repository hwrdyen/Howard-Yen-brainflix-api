const express = require("express");
var cors = require("cors");
const app = express();
const videoRoutes = require('./routes/videos');

//configuration
require('dotenv').config();
const PORT = process.env.PORT || 8080;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/", videoRoutes);

app.listen(PORT, function() {
    console.log(`Server is running on ${PORT}`);
})