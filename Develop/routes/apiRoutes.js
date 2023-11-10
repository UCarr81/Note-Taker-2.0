const path = require('path');
const notes  = require('../db/db.json');
const fs = require('fs');
const uuid = require('../helpers/uuid');



module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
      res.json(notes);
});







}