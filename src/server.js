const express = require('express');
const fs = require('fs');
const cors = require('cors');
const DATA_FILE = "./model/data.json";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/superstars", function(req, res) {
    fs.readFile(DATA_FILE, function(error,data) {
        const superstars = JSON.parse(data);
        res.send(superstars);
    });
});

app.post("/api/superstars", function(req,res){
    console.log('Name: '+req.body.name);
    console.log('Email: '+req.body.email);
    res.send('Hey I got it!');
});
app.listen(3020, () => console.log("I am started!"));