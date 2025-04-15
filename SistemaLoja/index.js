import express from "express";

const app = express();

import LojaProd from "./controllers/LojaProd.js";

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/",LojaProd);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro no servidor " + error);
  } else {
    console.log("Servidor iniciado!");
  }
});
