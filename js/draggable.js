var nav = $(".planez");

nav.draggable({
  containment: "planeWrapper"
});



navWidth = 0;
$(".nav").each(function (index) {
  navWidth += parseInt($(this).width(), 10);
});
document.addEventListener("drag", function(event) {
  if (nav.offset.left > 10) {
    nav.position.left = 10;
  }
  if (nav.offset.top > 10) {
    nav.position.top = 10;
  }
  if (nav.offset.bottom > 10) {
    nav.position.bottom = 10;
  }
  if (nav.offset.right > 10) {
    nav.position.right = 10;
  }

  if (nav.position.left < navWidth - nav[0].scrollWidth) {
    nav.position.left = navWidth - nav[0].scrollWidth + 5;
  }
}, false);
