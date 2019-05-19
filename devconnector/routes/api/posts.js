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

//@route    POST api/posts/like/:id
//@desc     Like post
//@access   Private
routes.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          console.log(post);
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "User already Liked this Post" });
          }

          //Add user id to like array
          post.likes.unshift({ user: req.user.id });

          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ nopostsfound: "no post found" }));
    });
  }
);

//@route    DELETE api/posts/unlike/:id
//@desc     Unlike post
//@access   Private
routes.delete(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          console.log(post);
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ notliked: "You have not Liked this Post" });
          }

          //Get Remove index
          const removeIndex = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);
          //Splice out of array
          post.likes.splice(removeIndex, 1);
          //Save
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ nopostsfound: "no post found" }));
    });
  }
);

//@route    POST api/posts/comment/:id
//@desc     comment on post
//@access   Private
routes.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          const newComment = {
            text: req.body.text,
            name: req.body.name,
            avatar: req.body.avatar,
            user: req.user.id
          };

          //Add commen to the Array
          post.comments.unshift(newComment);

          //Save Post
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ nopostsfound: "no post found" }));
    });
  }
);

//@route    DELETE api/posts/comment/:id/:comment_id
//@desc     delete comment on post
//@access   Private
routes.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          //Check if the comment exist
          if (
            post.comments.filter(
              comment => comment._id.toString() === req.params.comment_id
            ).length === 0
          ) {
            return res
              .status(404)
              .json({ commentnotexist: "Comment does not exist" });
          }

          //Get remove index
          const removeIndex = post.comments
            .map(comment => comment._id.toString())
            .indexOf(req.params.comment_id);

          //Splice out of array
          post.comments.splice(removeIndex, 1);

          //Save Post
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ nopostsfound: "no post found" }));
    });
  }
);

module.exports = routes;
