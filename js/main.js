document.addEventListener('DOMContentLoaded', function(event) {

  var modal = document.querySelector('.modal');
  var signIn = document.querySelector('.signin');
  var close = document.querySelector('.close');
  var submit = document.querySelector('.submit');
  var inputs = document.querySelectorAll('input');

  //-------------------------------------------------------------------------------------

  // When the user presses the .signin button, fade in the modal window

  function showModalWindow(click) {
    modal.style.display = 'block';
  };

  signIn.addEventListener('click', showModalWindow);

  //-------------------------------------------------------------------------------------

  // When the user presses the .close button, fade out the modal window

  function hideModalWindow(click) {
    modal.style.display = 'none';
  };

  close.addEventListener('click', hideModalWindow);

  //-------------------------------------------------------------------------------------

  // When the user presses the .submit button, add an .error class to both input elements


  // Crappy for-loop that didn't work:
  // function addError(click) {
  //   for (i = 0; i < inputs.length; i++) {
  //     inputs.className = 'error';
  //   };
  // };
  function addError(click) {
    var u = document.getElementById("user");
    u.className = "error";
    var p = document.getElementById("pass");
    p.className = "error";
  };

  submit.addEventListener('click', addError);

  //-------------------------------------------------------------------------------------

  // When the user puts their cursor in one of the input fields, remove the .error class

  function removeError(click) {
    var u = document.getElementById("user");
    u.className = nil;
    var p = document.getElementById("pass");
    p.className = nil;
  };

  inputs.addEventListener('click', removeError);




  //-------------------------------------------------------------------------------------
});
