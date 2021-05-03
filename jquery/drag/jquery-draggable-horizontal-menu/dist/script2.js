var nav = $(".nav");

nav.draggable({
  axis: "xy",
  containment: "draggable",
  distance: 10
});

navWidth = 0;
$(".nav a").each(function (index) {
  navWidth += parseInt($(this).width(), 10);
});

nav.on("drag", function (event, ui) {
  if (ui.offset.left > 10) {
    ui.position.left = 10;
  }

  if (ui.position.left < navWidth - nav[0].scrollWidth) {
    ui.position.left = navWidth - nav[0].scrollWidth + 5;
  }
});
