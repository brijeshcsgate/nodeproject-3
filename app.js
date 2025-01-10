// Import Express module
const express = require('express');

// Initialize an Express application
const app = express();

// Define the port the server will listen to
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World with brijesh maurya jai shree ram!');
});

// Start the server and make it listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
