// JSON and AJAX
var	songElement2 = document.getElementById("jsonMusic");
var songs2 = ""; 

function executeThisCodeAfterFileIsLoaded () {
  // A bit more about what `this` is here. What is the execution context?
  // console.log(this.responseText);

  // Show usage of JSON.parse() here to get a POJO
  var test = JSON.parse(this.responseText); //This is the array of Objects 
  console.log(test); //Gives me the object, not too helpful 
  // looping through JSON file 
  for (var i = 0; i < test.length; i++) {
    songs2 += "<div class='songs2'>" + test[i].title + " by " + test[i].artist + " on the album " + test[i].album + "<button id='delete'> Delete </button>" + "</div>";
   }
 //end of executeThisCodeAfterFileIsLoaded function
console.log(songs2);
songElement2.innerHTML = songs2;
}

// Create an XHR object
var myRequest = new XMLHttpRequest();
// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
// myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "music.json");

// Tell the XHR object to start
myRequest.send();

// Makes delete button work
songElement2.addEventListener("click", function(event) {
	if (event.target.id === "delete") {
		toDelete = event.target.parentNode;
		songElement2.removeChild(toDelete)
	};
});
songElement.addEventListener("click", function(event) {
	if (event.target.id === "delete") {
		toDelete = event.target.parentNode;
		songElement.removeChild(toDelete)
	};
});
// second JSON request // 

var	songElement3 = document.getElementById("jsonMusic");
var songs3 = "";
var button = document.getElementById("btn")
button.addEventListener("click", getMusic)
function executeThisCodeAfterFileIsClicked () {
  // A bit more about what `this` is here. What is the execution context?
  var json2 = JSON.parse(this.responseText);
		for (var i = 0; i < json2.length; i++) {
   		songs3  += "<div class='json3'>" + json2[i].title + " by " + json2[i].artist + " on the album " + json2[i].album + "<button id='delete'> Delete </button>" + "</div>";
   }
console.log(songs3);
songElement3.innerHTML += songs3;
};

function getMusic() {
// Create an XHR object
var Request2 = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
Request2.addEventListener("load", executeThisCodeAfterFileIsClicked);


// Then tell the XHR object exactly what to do
Request2.open("GET", "music2.json");  //what action is the request going to do

// Tell the XHR object to start
Request2.send();
};
// delete funtion//
songElement3.addEventListener("click", function(event) {
	if (event.target.id === "delete") {
		toDelete = event.target.parentNode;
		songElement3.removeChild(toDelete)
	};
});
