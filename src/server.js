const express = require('express');
const fs = require('fs');
const cors = require('cors');
const DATA_FILE = "./model/data.json";
const superstars = require(DATA_FILE);

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
   const newSuperstar = {
       "id": superstars[superstars.length - 1].id + 1,
       "name":req.body.name,
       "email":req.body.email,
       "votes":0
   };

   superstars.push(newSuperstar);

   fs.writeFile(DATA_FILE,JSON.stringify(superstars),(err) => {
        console.log(err);
   });
});
app.listen(3020, () => console.log("I am started!"));