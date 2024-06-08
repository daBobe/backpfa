const mongoose = require('mongoose');

const compteSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  mdp: String
});

const Compte = mongoose.model('Compte', compteSchema);

module.exports = Compte;
