
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
require('./routes/apiRoutes')(app, fs);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));