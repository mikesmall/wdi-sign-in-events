var modal = document.querySelector('.modal');
var signIn = document.querySelector('.signin');
var close = document.querySelector('.close');
var submit = document.querySelector('.submit');
// For later:
// var error = document.querySelector('');
//-------------------------------------------------------------------------------------
// When the user presses the .signin button, fade in the modal window
function displayModalWindow(click) {
  modal.style.display = 'block';
};

signIn.addEventListener('click', displayModalWindow);
//-------------------------------------------------------------------------------------
// When the user presses the .close button, fade out the modal window
function hideModalWindow(click) {
  modal.style.display = 'none';
};

close.addEventListener('click', hideModalWindow);
//-------------------------------------------------------------------------------------
// When the user presses the .submit button, add an .error class to both input elements


//-------------------------------------------------------------------------------------
// When the user puts their cursor in one of the input fields, remove the .error class
