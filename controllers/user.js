const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

//middleware de register
exports.signup = (req, res, next)=>{
  bcrypt.hash(req.body.password,10)
    .then(hash=>{
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(()=> res.status(200).json({message:"Utilisateur crée"}))
        .catch(err =>res.status(500).json({err}))
    })
    .catch(err =>res.status(500).json({err}));
}

//middleware de login
exports.login = (req, res, next)=>{
User.findOne({email: req.body.email})
    .then(user =>{
        if(user === null){
           res.status(404).json({message:"votre email ou mot de passe incorrecte"}); 
        }
        else{
            bcrypt.compare(req.body.password,user.password)
            .then(valid=>{
                if(!valid){
                    res.status(401).json({message:"votre email ou mot de passe incorrecte"});
                }
                else{
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            {userId: user._id},'RANDOM_TOKEN_SECRET',{expiresIn: '24h'}
                        )
                    })
                }
            })
            .catch(err =>res.status(500).json({err}));
        }
    })
    .catch(err => res.status(500).json({err}));
}