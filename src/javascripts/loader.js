"use strict";

var $ = require('jQuery');
const Songs = require('./songs');
const Views = require('./views');
const Filter = require('./filter');
const AddSongs = require('./addSongs');
const Main = require("./mainModule");
///////Everything has to draw off of this js file///////////
let AJAX = {};
let songs = [];

AJAX.load = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "music.json"
    }).done(function(data) {
      resolve(data);
      // console.log("data", data); //////logs out data///////
    }).fail(function() {
      console.log("error");
    });
  });
}; 

/////////Needs 2 methods///////////
////////need to add data to songs array////////////
AJAX.load().then(function(data){
  for (var i = 0; i < data.length; i++){
  songs.push(data[i].title + " by " + data[i].artist + " on the album " + data[i].album)}
  console.log(songs);
  // console.log("hey", data); ///////will still print out correct value///////////
  // Songs.addToArray(data);

}); ////// accessing the data correctly 



// $.map(AJAX, function(song) {
//     console.log(songs.album);
// });
