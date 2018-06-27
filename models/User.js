var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

userSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('user', userSchema);

// REGISTER NEW USER
module.exports.addUser = function(user,callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) throw err;
        user.password = hash;
        user.save(callback);
    });
  });
}










