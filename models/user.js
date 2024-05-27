const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
const userShema = mongoose.Schema({
  email:{type: 'string', required: true, unique: true},
  password:{type: 'string', required: true}
})
//pour que les utilisateur ne s'inscrive pas avec deux emails correspondantes
//pour l'installer npm install --save mongoose-unique-validator
userShema.plugin(uniquevalidator);

module.exports = mongoose.model('User', userShema);