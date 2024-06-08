const mongoose = require('mongoose');

const sousCategorieSchema = new mongoose.Schema({
  nom: String
});

const SousCategorie = mongoose.model('SousCategorie', sousCategorieSchema);

module.exports = SousCategorie;
