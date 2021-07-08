const express = require('express');
const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid"); ///Added for the notes Id
var db = require("./db/db.json");


const app = express(); //With this we tell node we are creating the 'express' server
const PORT = process.env.PORT || 3009; //setting up the port


//set up the express app to handle data parsing, static and route middleware
app.use(express.json());  //es como un default, viene en otros ejemplos
app.use(express.urlencoded({ extended: true }));  //es como un default, viene en otros ejemplos
app.use(express.static("public"));


// -------------------------------------------- Routes -------------------------------------------

//HTML Routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})



// API Routes
app.get("/api/notes", (req,res) => {
    res.json(db);
})

app.post("/api/notes", (req, res) => {
    let data = req.body;
    data.id = uniqid(); 
    db.push(data);
    console.log(db);
    fs.writeFile("./db/db.json", JSON.stringify(db), err => {
        if (err) throw err
        res.json("ErrorP")
    })
})


//Delete Option
app.delete("/api/notes/:id", (req, res) => {
    let IdToDelete = req.params.id;
    for(i=0; i < db.length; i++){
        if(IdToDelete == db[i].id){
            db.splice(i,1);
        }
    }
    fs.writeFile("./db/db.json", JSON.stringify(db), err => {
        if(err) throw err
        res.json("ErrorD")
    })
})



// -------------------------------------------- LISTENER -------------------------------------------

// This is the Listener, 'starts' the server on the port (default code)
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
