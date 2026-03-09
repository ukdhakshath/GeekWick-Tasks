const express = require("express");

const app = express();

// create API route
app.get("/", (req, res) => {
    res.send("Hello, this is my first API!");
});

// server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});