const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;
//const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static('public'));


let notes = [];

// Reads Notes
app.get('/api/notes', (req, res) =>  {
    const notesData = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
    res.json(notesData.notes);
});


// Creates New Notes
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();

  const notesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')));
  notesData.notes.push(newNote);

  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notesData));

  res.json(newNote);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
});

app.listen(PORT, () =>
    console.log(`App Listening at http://localhost:${PORT}`)
);