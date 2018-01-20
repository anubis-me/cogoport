var express     = require('express');           // Experss JS Framework
var app         = express();                    // Invoke express to variable for use in application
var port        = process.env.PORT || 8800;     // Set default port or assign a port in enviornment
var bodyParser  = require('body-parser');       // Parsing middleware. Parses incoming request bodies in a middleware before your handlers, available under req.body.
var router      = express.Router();             // Invoke the Express Router
var path        = require('path');              // Import path module

app.use(bodyParser.json());                         // Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));     // Allow front end to access public folder

// Set Application Static Layout
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html')); // Set index.html as layout
});

// Start Server
app.listen(port, function() {
    console.log('Running the server on port ' + port); // Listen on configured port
});
