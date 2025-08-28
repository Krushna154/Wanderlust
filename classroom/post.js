const express = require("express");
const router = express.Router();


//posts
//index
router.get("/", (req, res) => {
    res.send("GET for posts");
});

//Show
router.get("/:id", (req, res) => {
    res.send("GET for post id");
});

//POST
router.post("/:id", (req, res) => {
    res.send("POST for posts");
});

//DELETE
router.delete("/:id", (req, res) => {
    res.send("Delete for post id");
});

module.exports = router;
