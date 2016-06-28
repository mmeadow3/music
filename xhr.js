
"use strict";
var $ajax = $.ajax({
		url: "music.json"
	}).done(renderinDOM) 

//console.log($ajax) /////gives jQuery object

function renderinDOM (data){    ///////passes in an argument to parse info from JSON file
	// console.log(data.firstMessages)
	// console.log(data.length)
	for (var i = 0; i < data.length; i++) {
	$('.main').append("<div id='jsonMusic'>" + data[i].title + "by " + data[i].artist + " on the album " + data[i].album + "</div>");
}
};
////////Data appended to DOM///////////
