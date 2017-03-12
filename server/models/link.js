var mongoose = require("mongoose");
var linkSchema = mongoose.Schema({
    userName: { type: String},
    deviceName: { type: String},
    status: {type: String, enum:['done', 'waiting'], default: 'waiting'},
    createdAt: { type: Date, default: Date.now },
    processName: { type: String, enum:['register', 'log']}
});

var Link = mongoose.model("Link", linkSchema);
module.exports = Link;