const express = require('express');
const fs = require('fs');
const cors = require('cors');
const DATA_FILE = "./model/data.json";

const app = express();
app.use(cors());

app.get("/api/superstars", function(req, res) {
    fs.readFile(DATA_FILE, function(error,data) {
        const superstars = JSON.parse(data);
        res.send(superstars);
    });
});


app.listen(3020, () => console.log("I am started!"));