const SousCategorie = require('../models/SousCategorie');

// Create a new sousCategorie
exports.createSousCategorie = async (req, res) => {
  try {
    const newSousCategorie = new SousCategorie(req.body);
    await newSousCategorie.save();
    res.status(201).json(newSousCategorie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Get all sousCategories
exports.getAllSousCategories = async (req, res) => {
  try {
    const sousCategories = await SousCategorie.find();
    res.json(sousCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get sousCategorie by ID
exports.getSousCategorieById = async (req, res) => {
  try {
    const sousCategorie = await SousCategorie.findById(req.params.id);
    if (!sousCategorie) {
      return res.status(404).json({ message: 'SousCategorie not found' });
    }
    res.json(sousCategorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update sousCategorie
exports.updateSousCategorie = async (req, res) => {
  try {
    const sousCategorie = await SousCategorie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sousCategorie) {
      return res.status(404).json({ message: 'SousCategorie not found' });
    }
    res.json(sousCategorie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete sousCategorie
exports.deleteSousCategorie = async (req, res) => {
  try {
    const sousCategorie = await SousCategorie.findByIdAndDelete(req.params.id);
    if (!sousCategorie) {
      return res.status(404).json({ message: 'SousCategorie not found' });
    }
    res.json({ message: 'SousCategorie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
