$(function() {
  var menu = $('#header-nav-items');
  var menuHeight = menu.height();

  $("#pull").click(function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function(){
      var w = $(window).width();
      if(w > 960 && menu.is(':hidden')) {
          menu.removeAttr('style');
      }
  });

  $('.icon-3steps').click(function(e) {
    e.preventDefault();
    $('.apply-steps-box-info').slideToggle();
    $('.icon-3steps').toggleClass('fa-sort-asc fa-sort-desc', 'fa-sort-asc');
  });
});

