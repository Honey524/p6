const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => 
res.send("Program-6 Docker Automated Build Pipeline is Running Successfully!"));

app.get("/api/status", (req, res) => 
res.json({ status: "success", timestamp: new Date().toISOString() }));

app.listen(PORT, () => 
console.log(`Server running on http://localhost:${PORT}`)
);
