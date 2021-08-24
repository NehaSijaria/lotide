// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (const key in library.playlists) {
        let myPlaylistId = key;
        let myPlaylistName = library.playlists[key].name;
        let myTrackLength = library.playlists[key].tracks.length;
        console.log(myPlaylistId +":", myPlaylistName, "-",myTrackLength, "tracks" );
 }
 };



// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
 for (const key in library.tracks) {
 let myPrintTrack = key;
 let myTrackName = library.tracks[key].name;
 let myTrackArtist = library.tracks[key].artist;
 let myTrackAlbum = library.tracks[key].album;
 console.log(myPrintTrack +":", myTrackName,"by", myTrackArtist,"(" + myTrackAlbum + ")" );
}
}


// adds an existing track to an existing playlist
addTrackToPlaylist =function(trackId, playlistId) {
 let MyPlaylist = library.playlists[playlistId];
 MyPlaylist.tracks.push(trackId);
 console.log(library.playlists);

}

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
addTrack = function(name, artist, album) { 
const newTrackList = generateUid();

 library.tracks.newTrackList = {};
 library.tracks.newTrackList["id"] = newTrackList;
 library.tracks.newTrackList["name"] = name;
 library.tracks.newTrackList["artist"] = artist;
 library.tracks.newTrackList["album"]  = album;
 console.log(library.tracks);

};

// adds a playlist to the library
addPlaylist = function(name) {
  let newTrackList = generateUid();
  library.tracks["id"] = newTrackList;
 console.log(library.tracks);
}

};
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// 

// Test
const myLibraryCollectons = function(lists) {

};
printPlaylists()
printTracks()
printPlaylist("p01")
addTrackToPlaylist("t04","p01")
addTrack("add name", "add artist", "add album")