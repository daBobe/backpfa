const Encher = require('../models/Encher');
const Annonce = require('../models/Annonce');

// Create a new encher
exports.createEncher = async (req, res) => {
  try {
    // Create a new encher
    const newEncher = new Encher(req.body);
    await newEncher.save();

    // Update the prixactuelle of the associated Annonce
    const annonce = await Annonce.findById(newEncher.idannonce);
    if (!annonce) {
      return res.status(404).json({ message: 'Annonce not found' });
    }
    annonce.prixactuelle = newEncher.prix;
    await annonce.save();

    res.status(201).json(newEncher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all enchers
exports.getAllEnchers = async (req, res) => {
  try {
    const enchers = await Encher.find();
    res.json(enchers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get encher by ID
exports.getEncherById = async (req, res) => {
  try {
    const encher = await Encher.findById(req.params.id);
    if (!encher) {
      return res.status(404).json({ message: 'Encher not found' });
    }
    res.json(encher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update encher
exports.updateEncher = async (req, res) => {
  try {
    const encher = await Encher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!encher) {
      return res.status(404).json({ message: 'Encher not found' });
    }
    res.json(encher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete encher
exports.deleteEncher = async (req, res) => {
  try {
    const encher = await Encher.findByIdAndDelete(req.params.id);
    if (!encher) {
      return res.status(404).json({ message: 'Encher not found' });
    }
    res.json({ message: 'Encher deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Function to retrieve the number of enchers for a specific idannonce
exports.getNumberOfEnchersByAnnonceId = async (req, res) => {
  const annonceId = req.params.annonceId; // Assuming annonceId is passed as a route parameter
  try {
    const numberOfEnchers = await Encher.countDocuments({ idannonce: annonceId });
    res.json({ numberOfEnchers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNumberOfEnchersByUserId = async (req, res) => {
  const userid = req.params.userid; // Assuming annonceId is passed as a route parameter
  try {
    const numberOfEnchers = await Encher.findById(userid);
    res.json({ numberOfEnchers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};