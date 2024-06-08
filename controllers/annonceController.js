const Annonce = require('../models/Annonce');
const cloudinary = require('../cloudinary.config');
const upload=require('../multer');



const singleUpload = upload.single('image');
exports.createAnnonce = async (req, res) => {
  try {
    const { description, categorie, prixinit, datefinal, User_id,photo1 } = req.body;
      console.log(req.body)
    
    const prixactuelle =prixinit;
    const newAnnonce = new Annonce({
      
      description,
      categorie,
      prixinit,
      datefinal,
      User_id,
      photo:photo1,
      prixactuelle
    });

    await newAnnonce.save();

    res.status(201).json(newAnnonce);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};



// Get all annonces
exports.getAllAnnonces = async (req, res) => {
  try {
    const annonces = await Annonce.find({
      datefinal: { $gt: new Date()}
  });
    res.json(annonces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// get oldannonces
exports.getOldBids = async (req, res) => {
  try {
    // Find bids where the end date is in the past
    const oldBids = await Annonce.find({ datefinal: { $lt: new Date() } });

    // Return the list of old bids
    res.json(oldBids);
  } catch (error) {
    // Handle errors
    console.error('Error fetching old bids:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// Get annonce by ID
exports.getAnnonceById = async (req, res) => {
  try {
    const annonce = await Annonce.findById(req.params.id);
    if (!annonce) {
      return res.status(404).json({ message: 'Annonce not found' });
    }
    res.json(annonce);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update annonce
exports.updateAnnonce = async (req, res) => {
  try {
    const annonce = await Annonce.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!annonce) {
      return res.status(404).json({ message: 'Annonce not found' });
    }
    res.json(annonce);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete annonce
exports.deleteAnnonce = async (req, res) => {
  try {
    const annonce = await Annonce.findByIdAndDelete(req.params.id);
    if (!annonce) {
      return res.status(404).json({ message: 'Annonce not found' });
    }
    res.json({ message: 'Annonce deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAnnoncesByCategorie = async (req, res) => {
  try {
      const { category } = req.body; // Get category from the request body

      const annonces = await Annonce.find({ categorie: category });
      res.json(annonces);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
exports.searchAnnoncesByKeyword = async (req, res) => {
  try {
      const keyword = req.body.keyword; // Get the keyword from the request body

      // Use the keyword to filter annonces based on description
      const annonces = await Annonce.find({
          description: { $regex: keyword, $options: 'i' } // Case-insensitive search using regex
      });

      res.json(annonces); // Return the filtered annonces
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
exports.getAnnoncesByUserId = async (req, res) => {
  const userId = req.params.userId; // Assuming userId is passed as a route parameter
  try {
    const annonces = await Annonce.find({ User_id: userId });
    res.json(annonces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateAnnoncePrix = async (req, res) => {
  const { annonceId, newPrix } = req.body; // Assuming the request body contains the annonceId and the new price

  try {
    // Find the Annonce by its ID
    const annonce = await Annonce.findById(annonceId);
    if (!annonce) {
      return res.status(404).json({ message: 'Annonce not found' });
    }

    // Update the prixactuelle field
    annonce.prixactuelle = newPrix;
    await annonce.save();

    res.json(annonce); // Return the updated Annonce
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};