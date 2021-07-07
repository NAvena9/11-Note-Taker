var db = [];
const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");
// const router = require("express").Router();


//API Gets request
module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname + "/" + "db", "db.json")) /// try later "/db" instead of "/"+"db"
    });

    app.post('/api/notes', (req, res) => {
        const newToAdd = req.body;
        newToAdd.id = uniqid();
        db.push(newToAdd);
        //console.log(db);
        fs.writeFile(__dirname + "/db/db.json", JSON.stringify(db), (err) => {
            if (err) console.log(err);
        });
        res.sendFile(path.join(__dirname, "notes.html"));
    });

    app.delete("/api/notes/:id", (req, res) => {
        const selected = req.params.id;
        db = db.filter((note) => {
            return note.id != selected;
        });
        fs.writeFile(__dirname + "/db/db.json", JSON.stringify(db), (err) => {
            if (err) console.log(err);
        });

        return res.sendFile(path.join(__dirname, "notes.html"));
    });

};



//DEBUG: The posts are not working, insomnia is not able to post nor the app.

        // //API Gets request 
        // router.get('api/notes', (req, res) => {
        //     res.sendFile(path.join(__dirname + "/" + "db", "db.json")) /// try later "/db" instead of "/"+"db"
        // });

        // router.post('/api/notes', (req, res) => {
        //     const newNote = req.body;
        //     newNote.id = uniqid();
        //     db.push(newNote);
        //     //console.log(db);
        //     fs.writeFile(__dirname + "/db/db.json", JSON.stringify(db), (err) => {
        //         if (err) console.log(err);   
        //     });
        //     res.sendFile(path.join(__dirname, "notes.html"));
        // });

        // router.delete("api/notes/:id", (req, res) => {
        //     const selected = req.params.id;
        //     db = db.filter((note) => {
        //         return note.id != selected;
        //     });
        //     fs.writeFile(__dirname + "/db/db.json", JSON.stringify(db), (err) => {
        //         if(err) console.log(err);
        //     });

        //     return res.sendFile(path.join (__dirname, "notes.html"));
        // });

        // module.exports = router;