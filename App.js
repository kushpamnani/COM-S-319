// Importing necessary modules
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

// Creating an Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies

// Specify the port to listen on
const port = 8081;

// GET route to simulate a 'Not Found' response
app.get('/listRobots', (req, res) => {
    // Respond with a 404 Not Found status without reading the file
    res.status(404).send("The requested resource was not found.");
});

// POST, PUT, DELETE routes can be added here following the same pattern

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
