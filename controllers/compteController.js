const Compte = require('../models/compte');

// Create a new compte
exports.createCompte = async (req, res) => {
  try {
    const newCompte = new Compte(req.body);
    await newCompte.save();
    res.status(201).json(newCompte);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all comptes
exports.getAllComptes = async (req, res) => {
  try {
    const comptes = await Compte.find();
    res.json(comptes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get compte by ID
exports.getCompteById = async (req, res) => {
  try {
    const compte = await Compte.findById(req.params.id);
    if (!compte) {
      return res.status(404).json({ message: 'Compte not found' });
    }
    res.json(compte);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update compte
exports.updateCompte = async (req, res) => {
  try {
    const compte = await Compte.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!compte) {
      return res.status(404).json({ message: 'Compte not found' });
    }
    res.json(compte);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete compte
exports.deleteCompte = async (req, res) => {
  try {
    const compte = await Compte.findByIdAndDelete(req.params.id);
    if (!compte) {
      return res.status(404).json({ message: 'Compte not found' });
    }
    res.json({ message: 'Compte deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
