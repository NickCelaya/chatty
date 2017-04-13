var messages = [];

// extrnal dependdencies
var express = require('express');
var bodyParser = require('body-parser');

//app specific variables
var app = express();
app.use(express.static('assets'));
app.use(bodyParser.json());
var port = 6001;

app.listen(port, function () {
    console.log('Listening on port', port);
});

app.get('/messages', function (req, res, next) {
    res.status(200).json({
        messages: messages
    });
});

  app.post('/messages', function (req, res, next) {
    messages.push({ message: req.body.message, time: new Date() });
    res.status(200).json({ messages: messages });
  });


//kevins exmple.
