// Import Express.js
const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// Specify which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// Initialize an instance of Express.js
const app = express();

// Static middleware, set up Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Import api and html routes
app.use(apiRoutes);
app.use(htmlRoutes);

// Listen() method to listen for incoming connections on specified port
app.listen(PORT, () => {
    console.log(`App server on http://localhost:${PORT}`);
});