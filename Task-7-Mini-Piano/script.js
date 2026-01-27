var sounds = [
  {name: 1 , sound: "./sounds/1.mp3"},
  {name: 2 , sound: "./sounds/2.mp3"},
  {name: 3 , sound: "./sounds/3.mp3"},
  {name: 4 , sound: "./sounds/4.mp3"},
  {name: 5 , sound: "./sounds/5.mp3"},
  {name: 6 , sound: "./sounds/6.mp3"},
  {name: 7 , sound: "./sounds/7.mp3"},
  {name: 8 , sound: "./sounds/8.mp3"},
  {name: 9 , sound: "./sounds/9.mp3"},
  {name: 10 , sound: "./sounds/10.mp3"},
  {name: 11 , sound: "./sounds/11.mp3"},
  {name: 12 , sound: "./sounds/12.mp3"},
  {name: 13 , sound: "./sounds/13.mp3"},
  {name: 14 , sound: "./sounds/14.mp3"},
  {name: 15 , sound: "./sounds/15.mp3"},
  {name: 16 , sound: "./sounds/16.mp3"},
  {name: 17 , sound: "./sounds/17.mp3"},
  {name: 18 , sound: "./sounds/18.mp3"},
  {name: 19 , sound: "./sounds/19.mp3"},
  {name: 20 , sound: "./sounds/20.mp3"},
  {name: 21 , sound: "./sounds/21.mp3"},
  {name: 22 , sound: "./sounds/22.mp3"},
  {name: 23 , sound: "./sounds/23.mp3"},
  {name: 24 , sound: "./sounds/24.mp3"},
  {name: 25 , sound: "./sounds/25.mp3"},
  {name: 26 , sound: "./sounds/26.mp3"}
]

document.addEventListener("keydown",function(dets){
  var key = dets.key.toLowerCase();

  if(key >= 'a' && key <= 'z'){
    var index = key.charCodeAt(0) - 97;
    var audio = new Audio(sounds[index].sound);
    audio.currentTime = 0;
    audio.play();
  }
});