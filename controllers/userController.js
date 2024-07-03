const User = require('../models/User');
const Compte = require('../models/Compte');
exports.createUser = async (req, res) => {
  try {
    // Create a new User
    const newUser = new User(req.body);
    await newUser.save();

    // Create a corresponding Compte with just email and password
    const newCompte = new Compte({
      email: newUser.email,
      mdp: newUser.mdp // Assuming the password is stored in the User model
    });
    await newCompte.save();

    res.status(201).json(newUser); // You can choose to return newUser or newCompte here
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.login = async (req, res) => {
  const { nom, mdp } = req.body;

  try {
      // Find the user by username
      const user = await User.findOne({ nom });  

      // If user doesn't exist or password is incorrect
      if (!user || user.mdp !== mdp) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

      // Send success message
      res.status(200).json(user);
  } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
