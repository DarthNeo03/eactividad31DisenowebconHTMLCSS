const express = require('express');
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
    res.send("Welcome to my API");
});

module.exports = router;