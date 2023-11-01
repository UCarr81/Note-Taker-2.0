const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('<!--Routes to api -->')
const app = express();
const PORT = 3001;
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static('public'));


let notes = [];


app.get('/', (req, res) =>  
    res.sendFile(path.join(__dirname, '/Develop/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/Develop/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App Listening at http://localhost:${PORT}`)
);