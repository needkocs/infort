


var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector ('.nav-active');
menuButton.addEventListener ('click', function () {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('nav-active');
});





$(document).ready(function() {
  $(".nav-a").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});

$(document).ready(function() {
  $(".arrow").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});