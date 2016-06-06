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

// added delete button. JS is below for click event 
for (var i = 0; i < songs.length; i++) {
	newSongs += "<div class='songs'>" + songs[i] + "<button id='delete'> Delete </button>" + "</div>";
};

console.log("newSongs", newSongs)

songElement.innerHTML = newSongs;















