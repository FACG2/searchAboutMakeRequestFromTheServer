var request = require('request');

function sendRequest(cb) {
    request('http://api.giphy.com/v1/gifs/random?api_key=32a0bb56b37a4e23b1d75c92094695b8',
     function(error, response) {
        cb(error, JSON.parse(response.body).data.image_url);
    });

}


module.exports = sendRequest;
