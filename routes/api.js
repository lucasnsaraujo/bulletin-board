const express = require("express");
const router = express.Router();
const posts = require("../model/posts");

router.get("/all", (req, res) => {
  res.json(posts.getAll());
});

router.post("/new", express.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);
  res.send("Post adicionado com sucesso");
});

module.exports = router;
