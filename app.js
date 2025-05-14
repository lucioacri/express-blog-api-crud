const express = require("express");
const app = express();
const port = 3000;
const routerPosts = require("./routers/posts");

app.listen(port, () => {
  console.log("Server collgato alla port:" + port);
});

app.get("/", (req, res) => {
  res.json("Server del mio blog");
});

app.use(express.static("public"));
app.use("/bacheca", routerPosts);
