const express = require("express");
const router = express.Router();
VideosInfo = require("../data/videos.json");
VideoDetails = require("../data/video-details.json");

router.use((req, res, next) => {
    next()
})

router.get("/", (req, res) => {
    res.send("Express Homepage");
});

router.get("/videos", (req, res) => {
    console.log(VideosInfo);
    res.send(VideosInfo);
});

router.get("/videos/:videoId", (req, res) => {
    const videoId = req.params.videoId;
    let currentVideoDetails = VideoDetails.filter(video => video.id === videoId ? video : null);
    console.log(currentVideoDetails);
    res.send(currentVideoDetails);
})

module.exports = router;
