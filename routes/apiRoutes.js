var db = [];
const path = require("path");
const fs = require("fs");
const uniqid = require("uniqueid");

module.exports = (app) => {
    //API Gets request
    app.get('api/notes', (req, res) =>
        res.sendFile(path.join(__dirname + "/" + "db", "db.json")) /// try later "/db" instead of "/"+"db"
    );

    app.post('/api/notes', (req, res) => {
        const newOne = req.body;
        newOne.id = uniqid();
        db.push(newOne);
        //console.log(db);
        fs.writeFile(__dirname + "/db/db.json", JSON.stringify(db), (err) => {
            if (err) console.log(err);   
        });
        res.sendFile(path.join(__dirname, "notes.html"));
    });

    app.delete("api/notes/:id", (req, res) => {
        const selected = req.params.id;
        db = db.filter((note) => {
            return note.id != selected;
        });
        fs.writeFile(__dirname + "/db/db.json", JSON.stringify(db), (err) => {
            if(err) console.log(err);
        });

        return res.sendFile(path.join (__dirname, "notes.html"));
    });

}