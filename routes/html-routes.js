// Routes and modules required

const router = require("express").Router();
const path = require("path");
const fs = require("fs");

// GET request for HTML files
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
