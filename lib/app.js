'use strict';

const express = require('express');
const app = express();
const images = require('./routes/images');
const errorhandler = require('./errorhandler');
const path = require( 'path' );
const publicPath = path.resolve( __dirname, '../public' );
const indexHtml = path.resolve( __dirname, '../index.html' );

module.exports = app
.use(express.static(publicPath))
.get('/', (req,res) => res.sendFile(indexHtml))
.use('/api/images', images)
.use(errorhandler)
;
