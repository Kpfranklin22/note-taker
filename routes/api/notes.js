// Routes and modules 

const router = require("express").Router();
const db = require("../../db/db.json");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

// GET request for notes
router.get("/", (req, res) => {
  res.json(db);
});

router.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

// POST request for notes
router.post("/", (req, res) => {
  console.log(db);
  console.log(req.body);
  req.body.id = uuid();
  db.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) =>
    err ? console.log(err) : console.log("File written successfully")
  );
  res.json(db);
});

// Attempted the DELETE request but couldn't get it to work

// router.delete('/api/notes/:id', (req, res) => {
//     // reading notes form db.json
//     let db = JSON.parse(fs.readFileSync('../../db/db.json'))
//     // removing note with id
//     let deleteNotes = db.filter(item => item.id !== req.params.id);
//     // Rewriting note to db.json
//     fs.writeFileSync("../../db/db.json", JSON.stringify(deleteNotes));
//     res.json(deleteNotes);
//   });

module.exports = router;
