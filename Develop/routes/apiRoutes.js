const path = require('path');
const notes  = require('../db/db.json');
const fs = require('fs');
const uuid = require('../helpers/uuid');


//Routing
module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
      res.json(notes);
});


//post

app.post('/api/notes', (req, res) => {
  req.body.id = uuid();
  const note = req.body;
  console.log(notes);
  notes.push(note);
  fs.writeFileSync(path.join(__dirnamer, '../db/db.json'). JSON.stringify(notes));
  res.json(notes);
});



}