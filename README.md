# Research about **How to** Make a request from the server

#### we using npm modules to make a request from a node server to another server [request](https://www.npmjs.com/package/request)<br>
<br>
![install](https://nodei.co/npm/request.png)<br>

#### Using a module of your choice, create a node server which makes a request to an online API [GIPHY](https://developers.giphy.com/docs/)



## Super simple to use [`request`](https://www.npmjs.com/package/request)
Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

```
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```
### Team:

* [**AIA**](https://github.com/EngAyoosh)
* [**KEFAH**](https://github.com/kefelhelou)
* [**ABDALLAH**](https://github.com/abdhalees)
* [**MAHMOUD**](https://github.com/mrm7moud)
