var songs = [];

songs[songs.length] = "Blah Blach Balch Blach";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "bllllllllllaaaaaaahhhhhhhhhhh 2";

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/@/g,''); //gets rid of @ in Super Tramp
	songs[i] = songs[i].replace(/!/g,''); // gets rid of ! in Ironics
	songs[i] = songs[i].replace(/\*/g,''); // interesting way to replace * symbole
	songs[i] = songs[i].replace(/>/g,'-');
};

var newSongs = document.getElementById("javascript");
newSongs.innerHTML += `<div> ${songs} </div>`; 







