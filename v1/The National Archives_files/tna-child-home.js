/**
 * TNA Child home JS
 */

$(document).ready(function () {
  var $count = jQuery(".col-card").length;

  if ($count < 3) {
    var elements = document.getElementsByClassName("col-card");
    for (var i = 0; i < elements.length; i++) {
      elements[i].hide();
    }
  }

  if ($count > 3 && $count < 6) {
    var elements = document.getElementsByClassName("col-card");

    for (var i = 3; i < elements.length; i++) {
      elements[i].hide();
    }
  }
});
