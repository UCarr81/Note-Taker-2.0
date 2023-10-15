const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('<!--Routes to api -->')

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use('/api', api); //This is not yet defined!!!
app.use(express.static('public'));

app.get('/', (req, res) =>  
    res.sendFile(path.join(__dirname, '/Develop/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/Develop/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App Listening at http://localhost:${PORT}`)
);