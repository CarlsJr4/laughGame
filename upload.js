// This script uploads images to firebase when an image is fed into the input tag

const uploader = document.querySelector('[type=file]');
const imgHolder = document.querySelector('#screenshot-img');

// const config = 

uploader.addEventListener('change', () => {
    // Reference file 
    const file = uploader.files[0];
    // Reference storage destination
    const ref = firebase.storage().ref(`webcam/${file.name}`);
    // Upload the file
    ref.put(file); 
})    

imgHolder.addEventListener()