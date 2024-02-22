
const gifContainer = document.querySelector('.gif_container');
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');




noButton.addEventListener('mouseover', function() {
    const newGifUrl = 'Pics/output-onlinegiftools.gif'; 
// Change the src attribute of the image in the GIF container to the new GIF URL
    gifContainer.querySelector('img').src = newGifUrl;
});

yesButton.addEventListener('mouseover', function() {
    const oriGif = 'https://media.tenor.com/tbq1x_4ZUiEAAAAi/act-innocent.gif'; 
// Change the src attribute of the image in the GIF container to the new GIF URL
    gifContainer.querySelector('img').src = oriGif;
});
