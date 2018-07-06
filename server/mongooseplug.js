var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

/* var newUser = new User({name: "Amal",age:12,active:true});

newUser.save().then((res)=> {
    console.log(res);
}).catch((err)=> {

}); */

module.exports = {
    mongoose
}