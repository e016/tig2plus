# How to contribute

last updated 3/26/2026

*The Impossible Game 2+* is a mod of The Impossible Game 2.

# Asking for Custom Songs
### PLEASE READ before creating a new song issue!

There are a few rules to follow when creating a new issue asking the developers to add a new song:

* Supply two audio files; preferably .mp3 ones, one for the main song, and then a snippet of the song.
* The audio file name format is traditionally "artist-song-name.mp3"
* The snippet must be around 9 seconds longs and has a 2 second fade-in and fade-out. Longer songs (> 4~5 mins) can use multiple snippets in one (e.g.: Soulless 4's snippet, shows three parts of the song)
* Put the song name and the song artist, remix-er or label (if applicable) somewhere in your issue
* Lower the volume of the audio by around -2db:

![example of audio level](./exampleOfAmplitude.png)

* Write the BPM of the song in your issue. USE A BPM TAPPER or really *anything* to get the true BPM. Also, TIG2's engine cannot handle songs that change their tempo.
* It is fine to "cut" songs in order to shorten the length of the song. However, one must **not** cut the song 
sloppily. I've found Audacity's "Snap" feature useful for these kinds of song edits.

# Feature Requests

My mod attempts to implement features in a "Fluke Games" style. For example: how would they add the size button or boss saws? Most editor features are *extensions* of pre-existing objects; like move-on-switch, size button, lasers, etc... These features are implemented in the simplest and fairest ways possible. However, there are potential feature requests do not fit this "Fluke Games" style. These include:

 * Theme switch button- Worlds are supposed to have a specific theme (+ a few variations of that theme, like the red themes and synthwave)!
 * Theme-specific objects- The point of a theme is to just **re-skin your level**. Levels made in the Infinite theme shouldn't be impossible to re-create in other themes! This would just make themes harder to use and could confuse some creators.

# Contributing Through Code
 * TIG2 requires a live server to fetch all the assets
 * Note that most of the code is still obfuscated, with variables being one to two letter names (I've re-named some of these vars, but most are still untouched!)
