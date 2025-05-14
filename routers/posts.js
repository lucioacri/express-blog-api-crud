const express = require("express");
const router = express.Router();
const { posts } = require("../data.js");

// INDEX
router.get("/", (req, res) => {
  res.json({
    Description: "Lista dei post",
    Object: posts,
  });
});

// SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json({
    Description: "Visualizzaziuone del post " + id,
    Object: posts.find((post) => post.id === id),
  });
});

// CREATE
router.post("/", (req, res) => {
  res.json({ Description: "Creazione del post", Object: "" });
});

// UPDATE
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json({ Description: "Aggiornamento del post " + id, Object: "" });
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json({
    Description: "Cancellazione del post " + id,
    Object: posts.filter((post) => post.id !== id),
  });
});

module.exports = router;
