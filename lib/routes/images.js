'use strict';

const express = require('express');
const router = express.Router();

const bodyparser = require('../bodyparser');
// const checkAuth = require('../auth/checkAuth')();
// const uniq = require('../uniq');

const Image = require('../models/image');
// const Installment = require('../models/installment');
// const User = require('../models/user');

// const xml2js = require('xml2js');
// const xmlParser = new xml2js.Parser();
// const goodreadsKey = process.env.GR_KEY;

module.exports = router

.get('', (req,res,next) => {
  Image.find()
  .lean()
  .then ( images => res.send(images) )
  .catch( err => {
    console.log('error getting full image list');
    console.log(err);
    next(err);
  });
})

.get('/:id', (req,res,next) => {
  Image.findById(req.params.id)
  .lean()
  .then( image => res.send(image) )
  .catch( err => {
    console.log('error getting an image by id');
    console.log(err);
    next(err);
  });
})

.post('', bodyparser, (req,res,next) => {
  new Image(req.body)
  .save()
  .then( image => res.send(image) )
  .catch( err => {
    console.log('error a new image');
    console.log(err);
    next(err);
  });
})

;
