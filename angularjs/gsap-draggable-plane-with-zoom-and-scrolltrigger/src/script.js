var plane = $(".plane");
var planeWrapper = $(".planeWrapper");
var draggablePlane = new Draggable(planeWrapper, {
  type: "scroll",
  throwProps: true,
  inertia: true,
});
ScrollTrigger.batch(".randomElement", {
  scroller: planeWrapper,
  interval: 0.1,
  batchMax: 4,
  onEnter: batch => gsap.to(batch, {autoAlpha: 0.13, delay: 0.1, stagger: 0.15, overwrite: true}),
  onLeave: batch => gsap.set(batch, {autoAlpha: 1, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {autoAlpha: 0.13, delay: 0.1, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {autoAlpha: 1, overwrite: true}),
});
function goToStartScreen(){
  var startItem = $(".startScreen");
  var screenH = planeWrapper.height();
  var screenW = planeWrapper.width();
  var startItemH = startItem.outerHeight();
  var startItemW = startItem.outerWidth();
  var startPosition = startItem.position();
  var y2 = (screenH-startItemH)/2;
  var x2 = (screenW-startItemW)/2;
  var y = startPosition.top - y2;
  var x = startPosition.left - x2;
  gsap.to(planeWrapper, {duration: 3, scrollTo: {y: y, x: x}, ease: "power2"});
}
$( document ).ready(function() {
  goToStartScreen();
});
$(".go-to-start-screen").click(goToStartScreen);
$(".zoom-in").click(function() {
  var zoomLvl = parseInt(plane.data("zoom"));
  var zoomLvlNew = zoomLvl + 1;
  if (zoomLvl < 20) {
    var xOffset = planeWrapper.scrollLeft();
    var yOffset = planeWrapper.scrollTop();
    var screenW = planeWrapper.width()/2;
    var screenH = planeWrapper.height()/2;
    var x = (xOffset+screenW)*1.25-screenW;
    var y = (yOffset+screenH)*1.25-screenH;
    var fontSizeCurrent = parseFloat(plane.css("font-size"))/16;
    var fontSizeNew = fontSizeCurrent * 1.25;
    gsap.to(planeWrapper, {duration: 1, scrollTo: {y: y, x: x}});
    gsap.to(plane, {duration: 1, fontSize: fontSizeNew+"em"});
    plane.data("zoom",zoomLvlNew);
  }
});
$(".zoom-out").click(function() {
  var zoomLvl = parseInt(plane.data("zoom"));
  var zoomLvlNew = zoomLvl + 1;
  if (zoomLvl > 5) {
    var zoomLvlNew = zoomLvl - 1;
    var xOffset = planeWrapper.scrollLeft();
    var yOffset = planeWrapper.scrollTop();
    var screenW = planeWrapper.width()/2;
    var screenH = planeWrapper.height()/2;
    var x = (xOffset+screenW)/1.25-screenW;
    var y = (yOffset+screenH)/1.25-screenH;
    var fontSizeCurrent = parseFloat(plane.css("font-size"))/16;
    var fontSizeNew = fontSizeCurrent / 1.25;
    gsap.to(planeWrapper, {duration: 1, scrollTo: {y: y, x: x}});
    gsap.to(plane, {duration: 1, fontSize: fontSizeNew+"em"});
    plane.data("zoom",zoomLvlNew);
  }
});
