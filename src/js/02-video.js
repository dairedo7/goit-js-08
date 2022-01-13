// import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

const savedSettings = localStorage.getItem('videoplayer-current-time');
const parsedSettings = JSON.parse(savedSettings);

player.setCurrentTime(parsedSettings.seconds).then(function (seconds) {

});