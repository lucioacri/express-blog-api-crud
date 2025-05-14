const { posts } = require("../data.js");

const index = (req, res) => {
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
  res.json({ Description: "Aggiornamento del post " + id, Object: "" });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  res.json({
    Description: "Cancellazione del post " + id,
    Object: posts.filter((post) => post.id !== id),
  });
};

module.exports = { index, show, create, update, destroy };
