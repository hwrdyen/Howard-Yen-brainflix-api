const express = require("express");
const router = express.Router();
VideoDetails = require("../data/video-details.json");

let VideoDetails_list = [...VideoDetails];

router.use((req, res, next) => {
    next();
})

router.get("/", (req, res) => {
    res.send("Express Homepage");
});

router.get("/videos", (req, res) => {
    res.json(VideoDetails_list);
});

router.get("/videos/:videoId", (req, res) => {
    const videoId = req.params.videoId;
    let currentVideoDetails = VideoDetails_list.find(video => video.id === videoId);
    res.json(currentVideoDetails);
});



router.post("/videos", (req, res) => {
    VideoDetails_list.push(req.body);
    res.status(201).send("Created New Video");
});

module.exports = router;
