var sidebar = document.querySelector('.sidebar');
var stickyPoint = 100;

window.addEventListener("scroll", function() {
  var scrollPos = window;

  if (scrollPos > stickyPoint) {
    sidebar.classList.add("fixed");
  } else {
    sidebar.classList.remove("fixed");
  }
});

var btn = document.querySelector('#btn');
var primaryBtn = document.querySelector('.primary-btn');

btn.onclick = function () {
    sidebar.classList.toggle('active')
}

primaryBtn.onclick = function () {
    sidebar.classList.toggle('active')
}