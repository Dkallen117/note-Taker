// Dependencies 
const path = require('path');

module.exports = (app) => {
  
    // GET request for main html
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
 
    // GET request for notes html
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // GET request for local javascript file
      app.get('/assets/js/index.js', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/assets/js/index.js'))
    });
   
    // GET request for local CSS file
    app.get('/assets/css/styles.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/assets/css/styles.css'))
    });
}