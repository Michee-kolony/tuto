const produitModel = require('../models/produit'); // Importer le modèle correctement

exports.createproduit =  (req, res, next) => {
    const produit = new produitModel({
      ...req.body
    });
    produit.save()
      .then(() => res.status(201).json({ message: "Votre produit est enregistré" }))
      .catch(error => res.status(400).json({ error }));
  }

exports.getallproduits = (req, res, next) => {
    produitModel.find()
      .then(produits => res.status(200).json(produits))
      .catch(error => res.status(400).json({ error }));
  }

exports.getoneproduits =  (req, res, next)=>{
    produitModel.findOne({_id:req.params.id})
    .then(produits => res.status(200).json(produits))
    .catch(error => res.status(400).json({ error }));
 
 }

exports.updateoneproduits = (req, res, next)=>{
    produitModel.updateOne({_id:req.params.id},{...req.body, _id:req.params.id})
    .then(() => res.status(200).json({message:"Donnée modifiée"}))
    .catch(error => res.status(400).json({error}));
 }
exports.deleteoneproduit =  (req, res, next)=>{
    produitModel.deleteOne({_id:req.params.id})
    .then(() => res.status(200).json({message:"Donnée supprimée"}))
    .catch(error => res.status(400).json({error}));
 }