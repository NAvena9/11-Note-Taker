const path = require('path');
const router = require("express").Router();


    //HTML GET Requests
    //each route below shows the usr an HTML page of content
    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });

    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/notes.html'))
    // });

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    module.exports = router;


    //    //each route below shows the usr an HTML page of content
    //    module.exports = (app) => {
    //     app.get('/notes', (req, res) => {
    //         res.sendFile(path.join(__dirname, '../public/notes.html'))
    //     });
    
    //     // app.get('/', (req, res) => {
    //     //     res.sendFile(path.join(__dirname, '../public/notes.html'))
    //     // });
    
    //     app.get('*', (req, res) => {
    //         res.sendFile(path.join(__dirname, '../public/index.html'))
    //     });
    
    // }
    
    //     // module.exports = router;
    