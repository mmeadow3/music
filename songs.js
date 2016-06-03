var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array.
songs.unshift("Tweezer > by Phish on the album Picture of Nectar");

songs.push("Conduit > by Cumphreys on the Album IDK");

// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/@/g,''); //gets rid of @ in Super Tramp
	songs[i] = songs[i].replace(/!/g,''); // gets rid of ! in Ironics
	songs[i] = songs[i].replace(/\*/g,''); // interesting way to replace * symbole
	songs[i] = songs[i].replace(/>/g,'-');
	songs[i] = songs[i].replace(/\(/g,'');
	songs[i] = songs[i].replace(/-/g, '');
}
var	songElement = document.getElementById("javascript"); //gets info from DOM
var newSongs = "";

for (var i = 0; i < songs.length; i++) {
	var currentSong = songs[i];
	newSongs = newSongs + "<div class='songs'>" + currentSong + "</div>";
};

console.log("newSongs", newSongs)

songElement.innerHTML = newSongs;


// JSON and AJAX


function executeThisCodeAfterFileIsLoaded () {
  // A bit more about what `this` is here. What is the execution context?
  console.log(this.responseText);

  // Show usage of JSON.parse() here to get a POJO
  var test = JSON.parse(this.responseText); //This is the array of Objects 
  console.log(test);
  // looping through JSON file 
  for (var key in test) {
        console.log(test.key)
    }
}


// Create an XHR object
var myRequest = new XMLHttpRequest();
// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
// myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
var json = myRequest.open("GET", "music.json", true );

// Tell the XHR object to start
myRequest.send();










