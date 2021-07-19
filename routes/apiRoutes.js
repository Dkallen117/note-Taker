
const fs = require('fs');
const uniqid = require('uniqid');



module.exports = (app) => {

   
    // API GET Request
    app.get("/api/notes", (req, res) => {
        
        
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        
        
        
        
        res.json(data);
    });


    // API POST Request
    app.post("/api/notes", (req, res) => {

    
        const newNote = req.body;
        
        newNote.id = uniqid();

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    

        data.push(newNote);


        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        
    

        res.json(data);
    });

    app.delete("/api/notes/:id", (req, res) => {

        
        let noteId = req.params.id;
        

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        const deleteData = data.filter( note => note.id !== noteId );


        fs.writeFileSync('./db/db.json', JSON.stringify(deleteData));
        

        res.json(deleteData);
    });
    
}

