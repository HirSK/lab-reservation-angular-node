var mongoose = require('mongoose');

// reservation schema
var reservationSchema = new mongoose.Schema({
  labCode: String,
  regNo: String,
  applier: String,
  reservePurpose: String,
  reserveDate: String,
  startHour: Number,
  startMinute: Number,
  endHour: Number,
  endMinute: Number,
  approval: Boolean
});

module.exports = mongoose.model('reservation', reservationSchema);

module.exports.addNewReservation = function(reservation, callback){
  // console.log('in the model');
  reservation.save(callback);
}
