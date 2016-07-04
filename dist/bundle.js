(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
///////Delete button/////////
var delButton = $('<button/>')
  // type: 'button',
  // class: 'deleteButton',
  // id: 'delete',    bad to have "static ID on button"
  .text('Delete')
  .click(function() { ///////start of function///////
    $(this).parent().remove();
    // console.log("hey")
  });
////////////

var $ajax = $.ajax({
		url: "music.json"
	}).done(renderinDOM); 

function renderinDOM (data){    ///////passes in an argument to parse info from JSON file
	// console.log(delButton)
	for (var i = 0; i < data.length; i++) {
		var newButton = delButton;
		$('.main').append('<div class="songsItem">' + data[i].title + " by " + data[i].artist + " on the album " + data[i].album + "</div>");
		// console.log(newButton);
	} 
		$(".songsItem").append(newButton);  ///////outside of for loop//////
}


////////Data appended to DOM///////////
/////////////////Add second JSON File when a button is clicked///////////////

var $button = $('<button/>', {
  type: 'button',
  class: 'moreButton',
  id: 'more',
  text: 'More >',
  click: function() { ///////start of function///////
    var $ajax = $.ajax({
		url: "music2.json"
	}).done(renderinDOM); 

function renderinDOM (data){    ///////passes in an argument to parse info from JSON file
	// console.log(data.length)
	for (var i = 0; i < data.length; i++) {
	var newButton2 = delButton;

	// console.log(delButton);
	$('.main').append(`<div class="songitem2">` + data[i].title + " by " + data[i].artist + " on the album " + data[i].album  + `</div>`);
}
	$(".songitem2").append(newButton2);
}
}
}).appendTo($('#output')); //////can move with CSS ///////////

















},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
