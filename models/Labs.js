var mongoose = require('mongoose');

var labSchema = new mongoose.Schema({
  labCode: String,
  labName: String,
});

module.exports = mongoose.model('lab', labSchema,'lab');
