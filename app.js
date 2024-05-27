const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/routerproduit');
const bodyparser = require('body-parser');
const userRoute = require('./routes/user');
const cors = require('cors')

app.use(cors());
// Connexion à MongoDB
mongoose.connect('mongodb+srv://micheekolony71:1708roosevelt@cluster0.6htgklq.mongodb.net/cluster0',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.error('Connexion à MongoDB échouée !', err));
app.use(bodyparser.json());
app.use(express.json());


//importation de ma route de dans app.js
app.use('/produits', router);
//ma route authentification
app.use('/auth', userRoute);

module.exports = app;
