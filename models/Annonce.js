const mongoose = require('mongoose');

const annonceSchema = new mongoose.Schema({
  photo: String,
  description: { type: String, required: true },
  categorie: { type: String, required: true },
  souscategorie: { type: String,  },
  prixinit: { type: Number, required: true },
  datefinal: { type: Date, required: true },
  prixactuelle: { type: Number,  },
  User_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Change the reference to 'User' model
    required: true
  }
});

const Annonce = mongoose.model('Annonce', annonceSchema);

module.exports = Annonce;
