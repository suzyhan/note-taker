// Import Express.js
const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// Specify which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// Initialize an instance of Express.js
const app = express();

// Static middleware, set up Express for parsing data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`App server on http://localhost:${PORT}`);
});