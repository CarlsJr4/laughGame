// This script pulls a random image from firebase and displays it in the browser

// Select HTML elements
const randomPic = document.querySelector('.randomize');
const jumbotron = document.querySelector('.jumbotron');

// Root reference
var storageRef = firebase.storage().ref();

// Generate a random number for the image name 

// Point to specific image
function changeImg() {
    const totalImages = 2;

    imageId = Math.floor(Math.random() * totalImages + 1); // Returns a random number from 0 to total size of gallery 
    console.log(imageId);

    const fileName = `${imageId}.jpg`; // Replace this with file number
    const url = storageRef.child(fileName).getDownloadURL().then(function(url) {
    const img = document.querySelector('img');

    img.src = url; // Links image to source element 
 });
}

// Enable element functionalities
randomPic.addEventListener('click', changeImg);