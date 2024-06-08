const Categorie = require('../models/Categorie');

// Create a new categorie
exports.createCategorie = async (req, res) => {
  try {
    const newCategorie = new Categorie(req.body);
    await newCategorie.save();
    res.status(201).json(newCategorie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get categorie by ID
exports.getCategorieById = async (req, res) => {
  try {
    const categorie = await Categorie.findById(req.params.id);
    if (!categorie) {
      return res.status(404).json({ message: 'Categorie not found' });
    }
    res.json(categorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update categorie
exports.updateCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!categorie) {
      return res.status(404).json({ message: 'Categorie not found' });
    }
    res.json(categorie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete categorie
exports.deleteCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByIdAndDelete(req.params.id);
    if (!categorie) {
      return res.status(404).json({ message: 'Categorie not found' });
    }
    res.json({ message: 'Categorie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
