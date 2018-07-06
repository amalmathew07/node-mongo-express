var mongoose = require('mongoose');

var User = mongoose.model('UserDet',{
    name : {type:String},
    age: {type:Number},
    active: {type:Boolean}
});

module.exports = {
    User
}