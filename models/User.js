const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    role: {type: String, required: true, default: "Admin"},
    posts: {type: Types.ObjectId,},
    videos: {type: Types.ObjectId,}
});

module.exports = model('User', schema);