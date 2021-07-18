
const notesData = require("../db/db.json");


// ROUTING
module.exports = function (app, fs) {

  
    app.get("/api/notes", (req, res)=> {

        res.send(notesData);
    });
};