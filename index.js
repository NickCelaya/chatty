
const express = require("express");
const bodyParser = require("body-parser")

const app = express()


app.use(express.static("assets"))
app.use(bodyParser.json())


// const messages simulating a database
// it could named anything.
const messages = [];


//when a user hits this api/endpoint we created, we send back and object with the key of messages and the value data which is our array above. This is considered an api/endpoint
app.get('/messages', function(req, res, next){
 res.status(200).send({messages:messages });
});

//in the callback function we can use req, res, next, for shorthand in place of require, response, next.


//here the user is giving data to the server to pass into our messages array (stored above) in our simulated database. which is the array messages

app.post("/messages", function(require, response, next){
  messages.push({message:require.body.message, time: new Date() })  //toString()
  console.log(require.body);
  response.status(200).send({messages:messages});
});





// 3000 is saved to a variable called port.
// listening on port 3000
const PORT = 3000;
app.listen(PORT, function(){
  console.log("Listening on port: ", PORT);
});











//
//
//
//
// app.post('/messages', function (req, res, next) {
//   messages.push(req.body.message);
//   res.status(200).json({ messages: messages });
// });
