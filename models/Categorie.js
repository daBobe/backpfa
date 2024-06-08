const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
  nom: String,
  souscategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SousCategorie'
  }]
});

const Categorie = mongoose.model('Categorie', categorieSchema);

module.exports = Categorie;
