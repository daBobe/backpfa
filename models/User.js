const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: {
    type: String,
    unique: true
  },
  numtel: String,
  datedenaiss: Date,
  mdp: String,
  add1: String,
  add2: String,
  city: String,
  codepostal: String,
  etatvalid: {
    type: Boolean,
    default: false // Set default value to false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;