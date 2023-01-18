const router = require('express').Router();
const path = require("path");


router.get("/", (req, res) => {
res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // router.delete("/", (req, res) => {
  //   console.log("Hello");
  //   res.json("I am the delete route");
  // });

  
module.exports = router