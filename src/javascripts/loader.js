"use strict";

var $ = require('jQuery');
let MainModule = require('./mainModule'); ///// needs this///////
///////Everything has to draw off of this js file///////////
let AJAX = {};

let songsArray = [];
let artistArray = [];
let albumArray = [];

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

/////////Needs method to push to array///////////
////////need to add data to songs array////////////
AJAX.load().then(function(data){
  for (var i = 0; i < data.length; i++){
  songsArray.push(data[i].title);
  artistArray.push(data[i].artist); 
  albumArray.push(data[i].album);
} ///////end of for loop//////
console.log(songsArray, artistArray, albumArray); /////// correctly logs out values to a filled array//////////
MainModule.Print(data);  /////passing the "data" makes this print out object////////
  // Filter.add();/////////////////Why wont this work if I'm calling it here/////////
});

module.exports = AJAX;
