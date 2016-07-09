"use strict";

let Loader = require('./loader');


let $selectArtist = $('#artist');
let $selectAlbum = $('#album');
let $radio = $('.radio');
let $filter = $('#filter');
let Filter = {}; 

console.log(Loader)

$selectArtist.change(function(){
	console.log("working")
	for (var x in MainModule.album){

	}
});







$selectAlbum.change(function(){
	console.log("working too")
})





$radio.change(function(){
	console.log("radio is working");
});


$filter.click(function (){
	console.log("fired") /////////
});

















module.exports = Filter;