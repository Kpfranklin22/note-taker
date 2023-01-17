const router = require('express').Router();

router.get("/", (req, res) => {
  console.log("Hello");
  res.json("I am the / route");
});
router.get("/notes", (req, res) => {
    console.log("Hello");
    res.json("I am the notes route");
  });
  router.get("*", (req, res) => {
    console.log("Hello");
    res.json("I am the * route");
  });
  // router.delete("/", (req, res) => {
  //   console.log("Hello");
  //   res.json("I am the delete route");
  // });

  
module.exports = router