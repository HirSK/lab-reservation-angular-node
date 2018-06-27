var express = require('express');
var router = express.Router();

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


module.exports = router;

