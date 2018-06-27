var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var User = require('../models/User');

//  REGISTER NEW ADMIN
router.post('/register',function(req,res,next){
  let user = new User({
    email: req.body.inputEmail,
    username: req.body.username,
    password: req.body.inputPassword
  });
  User.addUser(user,(err,user) => {
    if (err) {
      res.json({success: false, msg: 'user registration failed'});
    }else{
      res.json({success:true , msg:'user created successfully'});
    }
  });
});

  // LOG USER
  router.post('/login',function(req,res,next){
    const query = {username: req.body.username};
    User.findOne(query,function(err,user){
      bcrypt.compare(req.body.password, user.password, function(err,result){
        if(result){
          res.json({success: true, msg: 'Success'});
        }else{
          res.json({success: false, msg: 'Login failed'});
        }
      });
    });
  });

module.exports = router;

