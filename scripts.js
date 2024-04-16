const gallery = document.querySelector('.image-gallery');
let currentIndex = 0;
const images = gallery.querySelectorAll('.gallery-image');
const totalImages = images.length;

function showNextImage() {
    currentIndex++;
    
   
if (currentIndex >= totalImages) {
        currentIndex = 
        curren
0;
    }
    const newPosition = -currentIndex * 100 + '%';
    gallery.
    galler
style.transform = 'translateX(' + newPosition + ')';
}

setInterval(showNextImage, 3000);