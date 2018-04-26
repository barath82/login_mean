var mongoose = require('mongoose');
var console = require('console');

var devicesEnrolled = new mongoose.Schema({
	deviceID:{
		type:String,
		unique:true,
		required:true
	},
	osversion:String, //accepted value - [apple, android, windows, mac, linux]
    model:String,
    IMEI:String,
    UDID:String,
    isenrolled:Boolean,
    profilename:String //this links device to profile
});

var usersEnrolled = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    name:String
});

mongoose.model('devicesenrolled', devicesEnrolled,'devicesenrolled');
mongoose.model('usersenrolled', usersEnrolled,'usersenrolled');
