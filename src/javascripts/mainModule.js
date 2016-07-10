"use strict";

let Print = require('./print');
let Filter = require('./filter');
let Loader = require('./loader');
let Delete = require('./delete');

let mainModule = {
	Print, 
	Filter, 
	Loader,
	Delete
};




module.exports = mainModule;