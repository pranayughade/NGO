// function openImage(image) {
//     var modal = document.getElementById("image-modal");
//     var modalImage = document.getElementById("modal-image");

//     modal.style.display = "block";
//     modalImage.src = image.src;
// }

// function closeImage() {
//     var modal = document.getElementById("image-modal");
//     modal.style.display = "none";
// }

var images = []; // Array to store the image sources
var currentIndex = 0; // Current image index

function openImage(image) {
    var modal = document.getElementById("image-modal");
    var modalImage = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImage.src = image.src;
    currentIndex = Array.from(image.parentNode.children).indexOf(image); // Set the current index based on the clicked image
}

function closeImage() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement the index and handle wrap-around
    var modalImage = document.getElementById("modal-image");
    modalImage.src = images[currentIndex];
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Increment the index and handle wrap-around
    var modalImage = document.getElementById("modal-image");
    modalImage.src = images[currentIndex];
}

// Populate the images array with the image sources
window.addEventListener("DOMContentLoaded", function() {
    var imgElements = document.querySelectorAll(".album-div img");
    for (var i = 0; i < imgElements.length; i++) {
        images.push(imgElements[i].src);
    }
});
