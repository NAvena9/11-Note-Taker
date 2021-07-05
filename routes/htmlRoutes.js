const path = require('path');


module.exports = (app) => {
    //HTML GET Requests
    //each route below shows the usr an HTML page of content

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });

    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/notes.html'))
    // });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

};