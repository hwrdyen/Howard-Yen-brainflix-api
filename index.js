const express = require("express");
const app = express();
const videoRoutes = require('./routes/videos');

app.use("/", videoRoutes);

app.listen(3001, function() {
    console.log("Server is running on 3001");
})