const express = require('express');
const router = express.Router();
const produitModel = require('../models/produit'); // Importer le modèle correctement
const { createproduit, getallproduits, updateoneproduits, getoneproduits, deleteoneproduit } = require('../controllers/controllerproduit');

// Route POST pour ajouter un produit
router.post('/produits',createproduit);
  
// Route GET pour récupérer tous les produits
router.get('/', getallproduits);
  
//route pour récuprer une donnée par son id
router.get('/:id',getoneproduits);
  
//route pour modifier une données
router.put('/:id', updateoneproduits );
  
// route delete
router.delete('/:id', deleteoneproduit);

module.exports = router;