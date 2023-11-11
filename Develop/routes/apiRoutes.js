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
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
  res.json(notes);
});

//Delete

app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const noteIndex = notes.findIndex(note => note.id === noteId);

  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
    res.json(notes);
  } 
});
}


//app.delete('/api/notes/:id', function (req, res) {
//  const id = req.body.id;
//  console.log('Troubleshooting notes with id function? Working?')
//  for (i = 0; i < notes.length; i++) {
//    if (notes[i].id === parseInt(id)) {
//      notes.splice(i, 1);
//      break;
//    }
//  }
//
//  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
//  res.json(notes);
//});
//
//}