var express = require('express');
var router = express.Router();

var Lab = require('../models/Labs');

/* GET ALL LABS */
router.get('/labs', function(req, res, next) {
  console.log("get request for labs");
  // Lab.find(function (err, labs) {
  //   if (err) return next(err);
  //   res.json(labs);
  // });
  Lab.find({})
  .exec(function(err,labs){
    if(err){
      console.log(err);
    }else{
      res.json(labs);
    }
  });
});



module.exports = router;
