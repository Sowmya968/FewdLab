const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// Serve static files (HTML, CSS, JS) from the "HTML" folder
app.use(express.static(path.join(__dirname)));

// Route for the home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "music.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});
