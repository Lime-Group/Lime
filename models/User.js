const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    role: {type: String, required: true, default: "User"},
    avatar: {type: String, default: ""},
    posts: {type: Types.ObjectId,},
    videos: {type: Types.ObjectId,},
    following: {type: Array, default: []},
    friends: {type: Array, default: []},
    city : {type: String, max: 50}
},
{timestamps: true},
);

module.exports = model('User', schema);