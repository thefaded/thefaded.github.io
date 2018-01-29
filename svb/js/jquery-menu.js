$(function() {
  function runEffect() {
    var selectedEffect = "blind";
    $("#menu").toggle(selectedEffect, null, 500);
  };

  $("#menuButton").on("click", function() {
    $(this).toggleClass("is-active");
    runEffect();
  });
});