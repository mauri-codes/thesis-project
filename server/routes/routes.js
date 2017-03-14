var express         = require("express");
var path            = require("path");

var User            = require("../models/user");
var Link            = require("../models/link");
var Ud              = require("../models/ud");
var Device          = require("../models/device");

var router = express.Router();

router.post("/registerdev", function (req, res) {
    var devicename  = req.body.devicename;
    var pass        = req.body.password;
    var owner       = req.body.owner;
    var username    = req.body.username;
    var newDevice = new Device({
        name: devicename,
        key: pass,
        owner: owner
    });
    newDevice.save();
    var newUD = new Ud({
        userName: owner,
        deviceName: devicename,
        fingerprint: owner + "1",
        stats: "user",
        number: 1
    });
    newUD.save();
    var newUser = new User({
        email: owner,
        name: username
    });
    newUser.save();
    res.json({done: "success", body: req.body});
});

module.exports = router;