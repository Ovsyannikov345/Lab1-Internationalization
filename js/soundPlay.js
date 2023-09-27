const soundButton = document.getElementById('play-video');
const audioElement = document.getElementById('audio');
var playerStatus = 'pause';

soundButton.addEventListener('click', () => {
    if (playerStatus == 'pause') {
        audioElement.play();
        playerStatus = 'play';
        soundButton.src = 'images/pause_button.svg';
    }
    else {
        audioElement.pause();
        playerStatus = 'pause';
        soundButton.src = 'images/play_video.png';
    }
});

audioElement.addEventListener('ended', () => {
    playerStatus = 'pause';
    soundButton.src = 'images/play_video.png';
});