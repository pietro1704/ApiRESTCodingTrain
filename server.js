var words = {
    "rainbow": 3,
}


console.log('server is starting...');
var express = require('express');

var app = express();

var server = app.listen(3000, listening);

function listening() {
    console.log('listening...');
}

app.use(express.static('website'));

app.get('/add/:word/:score', addWord);

function addWord(request, response) {
    var data = request.params;
    var word = data.num;
    var score = Number(data.score);

    words[word] = score;
    var reply = {
        "msg": "Thank You"
    }
    response.send(reply);
}

app.get('/all', sendAll);

function sendAll(request, response) {
    response.send(words)
}