const express = require("express");
const routes = express.Router();

//@route    GET api/posts/test
//@desc     Test route
//@access   Public
routes.get("/test", (req, res) => res.json({ msg: "Posts Worked!" }));

module.exports = routes;
