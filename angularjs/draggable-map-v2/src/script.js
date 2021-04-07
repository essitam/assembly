let screenWidth,
	screenHeight,
	mapWidth,
	mapHeight,
	maxX,
	maxY;

function resizeBounds(sidebar) {
  var draggable = Draggable.get(".draggable"),
      x = draggable.x,
      y = draggable.y;
	screenWidth = $(window).width();
	screenHeight = $(window).height();
	mapWidth = $(".draggable").width();
	mapHeight = $(".draggable").height();
	maxX = screenWidth - mapWidth;
	maxY = screenHeight - mapHeight;

	if (sidebar) {
		maxX = maxX - 350;
	}

	draggable.applyBounds({ minX: 0, maxX: maxX, minY: 0, maxY: maxY });
  TweenLite.from(draggable.target, 0.3, {x:x, y:y});
}

Draggable.create(".draggable", {
	bounds: { minX: 0, maxX: 0, minY: 0, maxY: 0 },
	edgeResistance: 0.95,
	type: "xy",
	zIndexBoost: false
});

window.addEventListener("resize", resizeBounds);
resizeBounds(true);
TweenMax.delayedCall(1, function() {
  TweenMax.to(".draggable", 1, { x: -screenWidth * 0.2 });

})






$("button").click(function() {
  $(".sidebar").toggleClass("open");
  if ($(".sidebar").hasClass("open")) {
    resizeBounds(true);
  } else {
    resizeBounds(false);
  }
});