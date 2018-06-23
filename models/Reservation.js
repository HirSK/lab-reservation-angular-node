var mongoose = require('mongoose');

// reservation schema
var reservationSchema = new mongoose.Schema({
  regNo: String,
  applier: String,
  reservePurpose: String,
  reserveDate: Date,
  startHour: Number,
  startMinute: Number,
  endHour: Number,
  endMinute: Number
});

module.exports = mongoose.model('reservation', reservationSchema);

module.exports.addNewReservation = function(reservation, callback){
  // console.log('in the model');
  reservation.save(callback);
}
