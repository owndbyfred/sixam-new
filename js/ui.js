document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".slider");
  var instances = M.Slider.init(elems, {
    indicators: false,
    height: 1000,
    interval: 10000
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.ScrollSpy.init(elems, {});
});
