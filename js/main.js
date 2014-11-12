$(function() {
  console.log('i am here');

  var menu = $('#header-nav-items');
  var menuHeight = menu.height();

  $("#pull").click(function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function(){
      var w = $(window).width();
      if(w > 320 && menu.is(':hidden')) {
          menu.removeAttr('style');
      }
  });
});

