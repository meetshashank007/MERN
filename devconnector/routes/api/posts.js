const express = require("express");
const routes = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");

//Load modal
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

//Load Validation
const validatePostInput = require("../../validation/post");

//@route    GET api/posts/test
//@desc     Test route
//@access   Public
routes.get("/test", (req, res) => res.json({ msg: "Posts Worked!" }));

//@route    POST api/posts
//@desc     Create a user Post
//@access   Private
routes.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost
      .save()
      .then(post => res.json(post))
      .catch(err => res.status(400).json(err));
  }
);

//@route    GET api/posts
//@desc     Get all posts
//@access   Public
routes.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ nopostsfound: "no post found with the ID" })
    );
});

//@route    GET api/posts/:id
//@desc     Get posts by id
//@access   Public
routes.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ nopostsfound: "no post found with the ID" })
    );
});

//@route    DELETE api/posts/:id
//@desc     Delete the target Post
//@access   Private
routes.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          //Chekc for post owner
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          //Delete
          post
            .remove()
            .then(() => res.json({ success: true }))
            .catch(err =>
              res.status(404).json({ nopostsfound: "no post found" })
            );
        })
        .catch(err => res.status(404).json({ nopostsfound: "no post found" }));
    });
  }
);

module.exports = routes;
