const router = require('express').Router();

router.get("/", (req, res) => {
    console.log("Hello");
    res.json("Whatsup");
  });
  router.post("/awesome", (req, res) => {
    console.log("Hello");
    res.json("Whatsup");
  });
  router.delete("/cool", (req, res) => {
    console.log("Hello");
    res.json("Whatsup");
  });
  
module.exports = router