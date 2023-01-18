const router = require("express").Router();
const db = require("../../db/db.json");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require('uuid');

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

router.post("/", (req,res)=>{
    console.log(db)
    console.log(req.body)
    req.body.id = uuid()
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db, null,2), err=> err?console.log(err):console.log("File written successfully"))
    res.json(db)
})

router.get("/", (req,res)=>{
    console.log("Getting all notes")
    res.json(db)
})


module.exports = router