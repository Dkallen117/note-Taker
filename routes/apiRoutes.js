// Dependencies
const fs = require('fs');

// Unique ID package
const uniqid = require('uniqid');

module.exports = (app) => {

    // GET Request
    app.get("/api/notes", (req, res) => {
        
        // Read db data via JSON
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        
        // Respond with above data
        res.json(data);
    });


    // POST Request
    app.post("/api/notes", (req, res) => {

        // Creat new note Request body
        const newNote = req.body;
        
        // Set ID using uniqid package
        newNote.id = uniqid();

        // Read db data via JSON
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    
        // Push new note in db.json file
        data.push(newNote);

        // Stringify/Write data in the newly written note in the db
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        
        // Respond with above data
        res.json(data);
    });

    // DELETE Request
    app.delete("/api/notes/:id", (req, res) => {

        // Fetched note to delete by id
        let noteId = req.params.id;
        
        // Read db data via JSON
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        // Filter data to retrive notes, besides one to delete
        const deleteData = data.filter( note => note.id !== noteId );

        // Stringify/Write data to delete the note in the db
        fs.writeFileSync('./db/db.json', JSON.stringify(deleteData));
        
        // Respond with the data to delete
        res.json(deleteData);
    });
    
}

