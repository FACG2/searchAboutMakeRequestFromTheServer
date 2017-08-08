var fs = require('fs');
//console.log(__dirname); this line to know the path for this file router.js in your laptop

var handlers = require('./handlers.js');

function router(req, res) {

    var url = req.url;

    if (url === '/') {

        handlers.handleHomeRoute(req, res);

    } else if (url.startsWith('/public')) {

        handlers.handlePublic(req, res);

    } else {

        handlers.handleNotFound(req, res);

    }

}

module.exports = router;