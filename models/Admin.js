const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  privileges: String
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
