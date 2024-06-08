const Vendeur = require('../models/Vendeur');

// Create a new vendeur
exports.createVendeur = async (req, res) => {
  try {
    const newVendeur = new Vendeur(req.body);
    await newVendeur.save();
    res.status(201).json(newVendeur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all vendeurs
exports.getAllVendeurs = async (req, res) => {
  try {
    const vendeurs = await Vendeur.find();
    res.json(vendeurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get vendeur by ID
exports.getVendeurById = async (req, res) => {
  try {
    const vendeur = await Vendeur.findById(req.params.id);
    if (!vendeur) {
      return res.status(404).json({ message: 'Vendeur not found' });
    }
    res.json(vendeur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update vendeur
exports.updateVendeur = async (req, res) => {
  try {
    const vendeur = await Vendeur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vendeur) {
      return res.status(404).json({ message: 'Vendeur not found' });
    }
    res.json(vendeur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete vendeur
exports.deleteVendeur = async (req, res) => {
  try {
    const vendeur = await Vendeur.findByIdAndDelete(req.params.id);
    if (!vendeur) {
      return res.status(404).json({ message: 'Vendeur not found' });
    }
    res.json({ message: 'Vendeur deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
