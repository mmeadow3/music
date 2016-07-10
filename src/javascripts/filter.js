"use strict";

let Loader = require('./loader');


let $selectArtist = $('#artist');
let $selectAlbum = $('#album');
let $radio = $('.radio');
let $filter = $('#filter');
let Filter = {}; 


Filter.changeArtist = function (data){
$selectArtist.change(function(){
	// console.log($selectArtist.val());
	// console.log(data[1].artist)
	for (var x in data){
	if ($selectArtist.val() === data[x].artist){
		$('#output >:not(:eq())').hide();  
		$('#song--[x]').appendTo($('#output')); 
	}
}
})};

	





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