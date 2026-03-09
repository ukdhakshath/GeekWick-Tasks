const express = require("express");

const app = express();

const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const errorHandler = require("./middleware/errorHandler");

const PORT = 3000;

app.use(express.json());

// routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// error middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});