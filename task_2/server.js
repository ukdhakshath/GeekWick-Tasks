const express = require("express");

const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About page");
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("Contact us at: contact@email.com");
});

// Users route
app.get("/users", (req, res) => {
    res.send("List of users");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});