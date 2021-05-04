var nav = $(".planez");

nav.draggable({
  axis: "xy",
  // containment: [-7312.5, -7312.5, 0, 0]
  containment: "planeWrapper"
  // distance: 10
});

navWidth = 0;
$(".nav").each(function (index) {
  navWidth += parseInt($(this).width(), 10);
});

nav.on("drag", function (event, ui) {
  if (ui.offset.left > 10) {
    ui.position.left = 10;
  }
  if (ui.offset.top > 10) {
    ui.position.top = 10;
  }
  if (ui.offset.bottom > 10) {
    ui.position.bottom = 10;
  }
  if (ui.offset.right > 10) {
    ui.position.right = 10;
  }

  if (ui.position.left < navWidth - nav[0].scrollWidth) {
    ui.position.left = navWidth - nav[0].scrollWidth + 5;
  }
});
