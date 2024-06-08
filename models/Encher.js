const mongoose = require('mongoose');

const encherSchema = new mongoose.Schema({
  idutilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  idannonce: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Annonce'
  },
  prix: Number
});

const Encher = mongoose.model('Encher', encherSchema);

module.exports = Encher;