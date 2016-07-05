"use strict";
var $ = require('jQuery');
///////Everything has to draw off of this js file///////////
let AJAX = {}
let songs = [];

AJAX.load = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "music.json"
    }).done(function(data) {
      resolve(data);
      console.log(data)
    }).fail(function() {
      console.log("error");
    });
  })
} 
AJAX.loadSongs = function (song) {
	songs.push(song)
	console.log(songs)

}
/////////Needs 2 methods///////////
////////need to add data to songs array////////////
AJAX.load(); ////// accessing the data correctly 
AJAX.loadSongs();
console.log(AJAX)
