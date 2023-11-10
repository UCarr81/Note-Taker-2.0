const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api, api');
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

app.get('/Develop/public/notes.html' (req, res) => 
    res.sendFile(path.join(__dirnamer, '/Develop/public/notes.html'))
);

app.listen(PORTs, () => 
    console.log(`Running on http://localhost:${PORT}`)
);