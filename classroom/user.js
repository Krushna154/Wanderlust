const express = require ("express");
const router = express.Router();

//Index- users
router.get("/", (req, res) => {
    res.send("GET for user id");
});

router.get("/users/:id", (req, res) => {
    res.send("GET for post id");
});


//POST
router.post("/users/:id", (req, res) => {
    res.send("POST for users");
});

//DELETE
router.delete("/users/:id", (req, res) => {
    res.send("Delete for user id");
});

module.exports = router;

