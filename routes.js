const express = require('express');
const router = express.Router();
const cloudinary=require('./cloudinary.config')

// Define the destination directory relative to the backend project directory



// Import controller functions
const userController = require('./controllers/userController');
const annonceController = require('./controllers/annonceController');
const vendeurController = require('./controllers/vendeurController');
const categorieController = require('./controllers/categorieController');
const sousCategorieController = require('./controllers/sousCategorieController');
const encherController = require('./controllers/encherController');
const adminController = require('./controllers/adminController');
const compteController = require('./controllers/compteController');



// Routes for Utilisateur (User)
router.post('/users', userController.createUser);
router.post('/login', userController.login);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Routes for Annonce
router.post('/bids', annonceController.createAnnonce);
router.get('/annonces', annonceController.getAllAnnonces);
router.get('/oldannonces', annonceController.getOldBids);
router.get('/annonces/:id', annonceController.getAnnonceById);
router.put('/annonces/:id', annonceController.updateAnnonce);
router.delete('/annonces/:id', annonceController.deleteAnnonce);

router.post('/annonces/category', annonceController.getAnnoncesByCategorie);
router.post('/annonces/search', annonceController.searchAnnoncesByKeyword);

router.get('/annonces/user/:userId', annonceController.getAnnoncesByUserId);
router.put('/annonces/update-prix', annonceController.updateAnnoncePrix);



// Routes for Vendeur
router.post('/vendeurs', vendeurController.createVendeur);
router.get('/vendeurs', vendeurController.getAllVendeurs);
router.get('/vendeurs/:id', vendeurController.getVendeurById);
router.put('/vendeurs/:id', vendeurController.updateVendeur);
router.delete('/vendeurs/:id', vendeurController.deleteVendeur);

// Routes for Categorie
router.post('/categories', categorieController.createCategorie);
router.get('/categories', categorieController.getAllCategories);
router.get('/categories/:id', categorieController.getCategorieById);
router.put('/categories/:id', categorieController.updateCategorie);
router.delete('/categories/:id', categorieController.deleteCategorie);

// Routes for SousCategorie
router.post('/souscategories', sousCategorieController.createSousCategorie);
router.get('/souscategories', sousCategorieController.getAllSousCategories);
router.get('/souscategories/:id', sousCategorieController.getSousCategorieById);
router.put('/souscategories/:id', sousCategorieController.updateSousCategorie);
router.delete('/souscategories/:id', sousCategorieController.deleteSousCategorie);

// Routes for Encher
router.post('/enchers', encherController.createEncher);
router.get('/enchers', encherController.getAllEnchers);
router.get('/enchers/:id', encherController.getEncherById);
router.get('/enchers/:id', encherController.getNumberOfEnchersByUserId);
router.put('/enchers/:id', encherController.updateEncher);
router.delete('/enchers/:id', encherController.deleteEncher);
router.get('/enchers/annonce/:annonceId', encherController.getNumberOfEnchersByAnnonceId);
// Routes for Admin
router.post('/admin', adminController.createAdmin);
router.get('/admin', adminController.getAllAdmins);
router.get('/admin/:id', adminController.getAdminById);
router.put('/admin/:id', adminController.updateAdmin);
router.delete('/admin/:id', adminController.deleteAdmin);

// Routes for Compte
router.post('/comptes', compteController.createCompte);
router.get('/comptes', compteController.getAllComptes);
router.get('/comptes/:id', compteController.getCompteById);
router.put('/comptes/:id', compteController.updateCompte);
router.delete('/comptes/:id', compteController.deleteCompte);

module.exports = router;
