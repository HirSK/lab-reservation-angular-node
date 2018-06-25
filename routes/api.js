var express = require('express');
var router = express.Router();

var Lab = require('../models/Labs');
var Reservation = require('../models/Reservation');

/* GET ALL LABS */
router.get('/labs', function(req, res, next) {
  //console.log("get request for labs");
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

//POST A REQUEST FROM THE USER
router.post('/apply',function(req,res,next){
  //console.log('in the route');
  let newReservation = new Reservation({
    labCode: req.body.labCode,
    regNo: req.body.regNo,
    applier: req.body.applier,
    reservePurpose: req.body.reservePurpose,
    reserveDate: req.body.reserveDate,
    startHour: req.body.startHour,
    startMinute: req.body.startMinute,
    endHour: req.body.endHour,
    endMinute: req.body.endMinute,
    approval: false
  });

  Reservation.addNewReservation(newReservation,(err,reservation) => {
    if(err){
      res.json({success: false, msg: 'Failed to submit your reservation'});
    }else{
      res.json({success: true, msg: 'Your reservation submitted.Approval is pending..'});
    }
  });
})


// CHECK REQUEST TIME AVAILABILITY
router.post('/checkAvailability',function(req,res,next){
  console.log(req.body.labCode);
  Reservation.find(
    {
      $and : [
        {
          "labCode": req.body.labCode
        },
        {
          "reserveDate": req.body.reserveDate
        },
        {
          $or : [
                  {"startHour" : {$gt: req.body.startHour, $lt: req.body.endHour}},
                  {"endHour" : {$gt: req.body.startHour, $lt: req.body.endHour}},
                  {
                    $and:
                    [
                      {
                        "startHour" : {$lt: req.body.startHour}
                      },
                      {
                        "endHour" : {$gt: req.body.endHour}
                      },
                    ]
                  },
                  {
                    $and:
                    [
                      {
                        "startHour" : {$eq: req.body.startHour}
                      },
                      {
                        "startMinute" : {$gt: req.body.startMinute}
                      },
                    ]
                  },
                  {
                    $and:
                    [
                      {
                        "startHour" : {$eq: req.body.endHour}
                      },
                      {
                        "endMinute" : {$lt: req.body.endMinute}
                      },
                    ]
                  },
                  {
                    $and:
                    [
                      {
                        "endHour" : {$eq: req.body.endHour}
                      },
                      {
                        "endMinute" : {$lt: req.body.endMinute}
                      },
                    ]
                  },
                  {
                    $and:
                    [
                      {
                        "endHour" : {$eq: req.body.startHour}
                      },
                      {
                        "endMinute" : {$gt: req.body.startMinute}
                      },
                    ]
                  },

                ]
         },

         {

         }

      ]
    },
    function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log(result);
        if (result.length > 0) {
          // console.log('has a query');
          res.json({success: false});
        }else{
          // console.log('no matchs');
           res.json({success: true});
        }

      }
  }
);
  //if the checking time is 12.30 - 14.45
  // Reservation.find(
  //     {
  //       $and : [
  //         {
  //           "labCode":"W002"
  //         },
  //         {
  //           "reserveDate":"2018-06-24"
  //         },
  //         {
  //           $or : [
  //                   {"startHour" : {$gt: 12, $lt: 14}},
  //                   {"endHour" : {$gt: 12, $lt: 14}},
  //                   {
  //                     $and:
  //                     [
  //                       {
  //                         "startHour" : {$lt: 12}
  //                       },
  //                       {
  //                         "endHour" : {$gt: 14}
  //                       },
  //                     ]
  //                   },
  //                   {
  //                     $and:
  //                     [
  //                       {
  //                         "startHour" : {$eq: 12}
  //                       },
  //                       {
  //                         "startMinute" : {$gt: 30}
  //                       },
  //                     ]
  //                   },
  //                   {
  //                     $and:
  //                     [
  //                       {
  //                         "endHour" : {$eq: 14}
  //                       },
  //                       {
  //                         "endMinute" : {$lt: 45}
  //                       },
  //                     ]
  //                   },
  //                   {
  //                     $and:
  //                     [
  //                       {
  //                         "endHour" : {$eq: 12}
  //                       },
  //                       {
  //                         "endMinute" : {$gt: 30}
  //                       },
  //                     ]
  //                   },
  //                   {
  //                     $and:
  //                     [
  //                       {
  //                         "startHour" : {$eq: 14}
  //                       },
  //                       {
  //                         "endMinute" : {$lt: 45}
  //                       },
  //                     ]
  //                   }
  //                 ]
  //          },

  //          {

  //          }
  //         // {
  //         //   "startMinute": {$lt: 45}
  //         // },
  //         // {
  //         //   "endMinute": {$gt: 30}
  //         // }
  //       ]
  //     },
  //     function(err,result){
  //       if(err){
  //         console.log(err);
  //       }else{
  //         res.json(result);
  //       }
  //   }
  // );
})

//  GET ALL PENDING REQUESTS OF THE USER
router.get('/getAllPendingRequests',function(req,res,next) {
  Reservation.find({})
  .exec(function(err,reservations){
    if(err){
      console.log(err);
    }else{
      res.json(reservations);
    }
  });
})

// UPDATES A REQUEST'S APPROVAL TO TRUE
router.put('/approveRequest',function(req,res,next) {

  // console.log(req.body.id);
  Reservation.updateOne(
    {_id:req.body.id},
    {$set: {approval: true}},
     function(err, approval) {
      if (err) {
        res.json({success: false, msg: 'Failed'});
      }
      else{
        res.json({success: true, msg: 'Approved'});
      }

  });
})
// UPDATES A REQUEST'S APPROVAL TO FALSE
router.put('/rejectRequest',function(req,res,next) {

  // console.log(req.body.id);
  Reservation.updateOne(
    {_id:req.body.id},
    {$set: {approval: false}},
     function(err, approval) {
      if (err) {
        res.json({success: false, msg: 'Failed'});
      }
      else{
        res.json({success: true, msg: 'Rejected Successfully'});
      }

  });
})

router.post('/searchReservationsByDate',function(req,res,next){
  console.log(req.body);
  Reservation.find(
    {
      $and:[
        {
          "reserveDate": req.body.reserveDate
        },
        {
          "labCode" : req.body.labCode
        }
      ]
    },
    function(err,result){
      if(err){
        console.log(err);
      }else{
        // console.log(result);
        res.json(result);
      }
    })
})


module.exports = router;
