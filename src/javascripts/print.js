"use strict";
let Loader = require('./loader')

let Print = function (data) {
  let $output = $('#output') ;
  let newHTML = "";
  for (var x in data) {
  newHTML += `<div id=song--${x}> <h3> ${data[x].title} </h3><p> ${data[x].artist} | ${data[x].album}</p><input type="button" class="deleteButton" value="Delete"></div>`;
  }
   $output.html(newHTML);
  console.log("data in function", data[2]);
}

module.exports = Print;
 





  