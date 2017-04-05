/*
 * Off Canvas
 * --------------------------------------------------
 */

$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.offcanvas').toggleClass('active');
    $('.footer').toggleClass('active');
  });
});
