// Package requirements
const express = require('express');

const app = express();

//Created PORT for server
const PORT = process.env.PORT || 3000;

// Parse data with express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });