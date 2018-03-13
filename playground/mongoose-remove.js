const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all todo documents
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5aa84c78dcc5a608a0b0be36'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5aa84c78dcc5a608a0b0be36').then((todo) => {
    console.log(todo);
});