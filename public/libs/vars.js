var Client = require('node-rest-client').Client;

exports.key = "JjJImNxfHk3bmBRQw4j7zL4NIIRUCkh9SRi4z57k";
exports.links = [
    'https://api.nasa.gov/planetary/apod?api_key=', //APOD imagery
    'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=', //Neo - Feed
    'https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=', //Neo - Lookup
    'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=', //Neo - Browse
    'https://api.nasa.gov/EPIC/api/natural/images?api_key=', //EPIC images
    'https://api.nasa.gov/EPIC/api/natural/date/2015-10-31?api_key=', //EPIC data
    'https://api.nasa.gov/EPIC/api/enhanced/all?api_key=', //EPIC - recent all data
    'https://api.nasa.gov/EPIC/archive/enhanced/2016/12/04/png/epic_RBG_20161204003633_01.png?api_key=', //EPIC - recent images
    'https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=', //EARTH - imagery
    'https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&begin=2014-02-01&api_key=', //EARTH - assets
    'https://api.nasa.gov/patents/content?query=temperature&limit=5&api_key=', //PATENTS
    'https://api.nasa.gov/planetary/sounds?q=apollo&api_key=', //SOUNDS
    'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events', //NATURAL EVENTS
    {
        'cad': 'https://ssd-api.jpl.nasa.gov/cad.api', //current distance of an asteroid
        'fireball': 'https://ssd-api.jpl.nasa.gov/fireball.api',//return all data about fireballs
        'nhats': 'https://ssd-api.jpl.nasa.gov/nhats.api', //missions
        'sentry': 'api.jpl.nasa.gov/sentry.api' //potential future earth impact
    }    
];

exports.treatDataEONET = function(data) {
    if (data.events.length === 0) {
        return "NOTHING TO WORRY!!!";
    } else {
        return data.events;
    }
}