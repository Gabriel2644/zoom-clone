const express = require("express");
const app = express();
const server = require("http").server;
const { v4: uuidv4 } = require("uuid");
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomid: req.params.room });
});

app.listen(3030, console.log("Listening to port 3030..."));
