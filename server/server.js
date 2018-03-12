
const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        console.log(`Saved todo: ${JSON.stringify(doc, undefined, 2)}`);
        res.send(doc);
    }, (e) => {
        console.log('Unable to save todo');
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});