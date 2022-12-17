const express = require("express");
const router = express.Router();
VideosInfo = require("../data/videos.json");
VideoDetails = require("../data/video-details.json");

let Videosinfo_list = [...VideosInfo];
let VideoDetails_list = [...VideoDetails];

router.use((req, res, next) => {
    next();
})

router.get("/", (req, res) => {
    res.send("Express Homepage");
});

router.get("/videos", (req, res) => {
    // console.log(VideosInfo);
    // res.send(VideosInfo);
    // fs.writeFileSync("videos_fs.json", JSON.stringify(Videosinfo_list));
    res.json(Videosinfo_list);
});

router.get("/videos/:videoId", (req, res) => {
    const videoId = req.params.videoId;
    // fs.writeFileSync("video-details_fs.json", JSON.stringify(VideoDetails_list));
    let currentVideoDetails = VideoDetails_list.find(video => video.id === videoId);
    // console.log(currentVideoDetails);
    // res.send(currentVideoDetails);
    res.json(currentVideoDetails);
});



router.post("/videos", (req, res) => {
    // res.send(new_videos);
    Videosinfo_list.push(req.body);
    // fs.writeFileSync("videos_fs.json", JSON.stringify(Videosinfo_list));

    VideoDetails_list.push(req.body);
    // fs.writeFileSync("video-details_fs.json", JSON.stringify(VideoDetails_list));

    res.status(201).send("Created New Video");
});

module.exports = router;
