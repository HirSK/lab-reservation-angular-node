var express = require('express');
var router = express.Router();

var Lab = require('../models/Labs');
var Reservation = require('../models/Reservation');

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

router.post('/apply',function(req,res,next){
  console.log('in the route');
  let newReservation = new Reservation({
    regNo: req.body.regNo,
    applier: req.body.applier,
    reservePurpose: req.body.reservePurpose,
    reserveDate: req.body.reserveDate,
    startHour: req.body.startHour,
    startMinute: req.body.startMinute,
    endHour: req.body.endHour,
    endMinute: req.body.endMinute
  });

  Reservation.addNewReservation(newReservation,(err,reservation) => {
    if(err){
      res.json({success: false, msg: 'Failed to submit your reservation'});
    }else{
      res.json({success: true, msg: 'Your reservation submitted.Approval is pending..'});
    }
  });

})



module.exports = router;
