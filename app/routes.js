//var User = require('./models/news');
module.exports = function(app) {
    var Client = require('node-rest-client').Client;
    
    app.get('/disasters', function(req, res) {
        //js = require('./public/libs/vars.js');

        client = new Client();

        client.registerMethod("getEONET", "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events", "GET");

        client.methods.getEONET((data, response) => {
            console.log(data.events);
            res.json(data.events);
        });
    });
    
    app.get('*', function(req, res) {
        res.sendFile('./public/views/index.html');
    })
    
};