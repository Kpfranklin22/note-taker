const router = require("express").Router()
router.post("/:occupation", (req,res)=>{
    console.log(req.params)
    res.json("Maybe I should add a note")
})
module.exports = router