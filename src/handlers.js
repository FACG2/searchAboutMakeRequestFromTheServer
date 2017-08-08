var fs = require('fs');
var request = require('./request.js');

var ContentTypes = {
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
};

function handleHomeRoute(req, res) {
    fs.readFile(__dirname + '/../public/index.html', function(err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Internel Server Error</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });

            request(function(err, body) {
                    //console.log(data.toString());
                    //console.log('mdmdmdd');
                    console.log(body);
                    res.end(body);
                })
        }
    });
}

function handlePublic(req, res) {

    var url = req.url;
    var parts = url.split('.'); // this line return 'main', 'css' and 'index', 'js'
    //console.log(parts[0]);
    var fileExtension = parts[parts.length - 1]; //this line return only 'css' and 'js'
    //console.log(fileExtension);

    fs.readFile(__dirname + '/..' + url, function(err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Internel Server Error</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': ContentTypes[fileExtension] });
            res.end(data);
        }
    });

}


function handleNotFound(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not Found</h1>');
}


module.exports = {
    handleHomeRoute: handleHomeRoute,
    handlePublic: handlePublic,
    handleNotFound: handleNotFound
};
