const express = require("express");

const app = express();

const studentRoutes = require("./routes/studentRoutes");

const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.use("/students", studentRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});