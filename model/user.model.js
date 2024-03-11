
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone_no: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true
  },
  acres: {
    type: String,
    required: true
  },
  practice_organic_farming: {
    type: Boolean,
    required: true
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
