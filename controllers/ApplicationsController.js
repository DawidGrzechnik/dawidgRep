const Services = require("../mongodb.js");
const mongoose = require("mongoose");

exports.store = (req, res) => {
    req.flash('form');
    res.redirect('/');
};

exports.postServices = async (req, res) => {
    //console.log(req.body);
  
    const newServices = new Services({
      nameServices: req.body.nameServices,
      cena: req.body.cena
    });
  
    try {
      await Services.create(newServices);
    } catch (error) {
      console.log(error);
    }

    
  };

  exports.view = async (req, res) => {
    try {
      const data = await Services.find();
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  };

  