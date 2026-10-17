const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;



app.post("/user", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }
    res.send(`Hello, ${name}!`);
});

app.get("/user/:id", (req, res) => {
    const { id } = req.params;
    res.send(`User ${id} profile`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});