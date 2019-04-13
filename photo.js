// This script pulls a random image from firebase and displays it in the browser

// Select HTML elements
const randomPic = document.querySelector('.randomize');

// Root reference
var storageRef = firebase.storage().ref();

// Point to specific image
function changeImg() {
    const totalImages = 3;

    imageId = Math.floor(Math.random() * totalImages + 1); // Returns a random number from 0 to total size of gallery 

    const fileName = `${imageId}.jpg`; // Replace this with file number
    const url = storageRef.child(fileName).getDownloadURL().then(function(url) {
    const img = document.querySelector('img');

    img.src = url; // Links image to source element 
 });
}

// Enable element functionalities
randomPic.addEventListener('click', changeImg);