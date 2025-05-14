const { posts } = require("../data.js");

const index = (req, res) => {
  let filteredPosts = [...posts];
  if (req.query.tags) {
    filteredPosts = posts.filter((post) => post.tags.includes(req.query.tags));
    return res.json({
      description: "Post filtrato",
      object: filteredPosts,
    });
  }
  res.json({
    Description: "Lista dei post",
    Object: posts,
  });
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ description: "Post not found", object: "Error 404" });
  }
  res.json({
    Description: "Visualizzaziuone del post " + id,
    Object: post,
  });
};

const create = (req, res) => {
  res.json({ Description: "Creazione del post", Object: "" });
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ description: "Post not found", object: "Error 404" });
  }
  res.json({ Description: "Aggiornamento del post " + id, Object: "" });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ description: "Post not found", object: "Error 404" });
  }
  posts.splice(posts.indexOf(post), 1);
  res.sendStatus(204);
  console.log(posts);
};

module.exports = { index, show, create, update, destroy };
