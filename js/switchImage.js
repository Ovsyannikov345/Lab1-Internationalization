var imageSwitchButton = document.getElementById('next-video-button');
var image = document.getElementById('intro-video');
let isOriginalImage = true;

imageSwitchButton.addEventListener('click', () => {
    if (isOriginalImage) {
        image.src = 'images/intro_video.png';
    }
    else {
        image.src = 'images/intro_video_2.jpg';
    }

    isOriginalImage = !isOriginalImage;
});