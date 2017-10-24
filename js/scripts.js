$(document).ready(function() {
  var over18 = confirm("Are you over 18? Click OK for yes or Cancel for no.");

  if (over21) {
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});
