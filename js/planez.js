// gsap.registerPlugin(ThrowPropsPlugin);

var planez = $(".planez");
var playn = $("#playn");
var planeWrapper = $(".planeWrapper");
// var draggablePlane = new Draggable(planeWrapper, {
//   type: "scroll",
//   // throwProps: true,
//   // inertia: true,
// });
/*
This content is released under the MIT License.
http://opensource.org/licenses/MIT
*/
//
// var planeObject = {
//     elem: playn[0],
//     x: 0,
//     y: 0,
//     vx: 0,
//     vy: 0,
//     ax: 0,
//     ay: 0,
//     mass: 10,
//     friction: 0
// }
//
// var friction = 1.0;
// //
// var mouse = {
//   x: 0,
//   y: 0,
//   vx: 0,
//   vy: 0
// }
//
// console.log(planeObject.elem);
//
// var mouseIsDown = false;
//
// window.addEventListener('mousedown', (e) => {
//   mouseIsDown = true;
//   mouse.x = e.pageX;
//   mouse.y = e.pageY;
// });
// window.addEventListener('mouseup', () => {
//   mouseIsDown = false;
//
// });
//
// var timer;
//
// window.addEventListener('mousemove', (e) => {
//   clearTimeout(timer);
//   timer = setTimeout(function() {
//     if(mouseIsDown) {
//       // mouse.x = e.pageX;
//       // mouse.y = e.pageY;
//       // mouse.vx = e.movementX;
//       // mouse.vy = e.movementY;
//       // planeObject.vx = mouse.vx;
//       // planeObject.vy = mouse.vy;
//       planeObject.elem.style.left = e.pageX - mouse.x+'px';
//       planeObject.elem.style.top = e.pageY - mouse.y+'px';
//     }
//   }, 10);
// });
//
//
// function draggable(element) {
// 	var isMouseDown = false;
//
//     // initial mouse X and Y for `mousedown`
//     var mouseX;
//     var mouseY;
//
//     // element X and Y before and after move
//     var elementX = 0;
//     var elementY = 0;
//
// 	// mouse button down over the element
//     element.addEventListener('mousedown', onMouseDown);
//
// 	/**
//      * Listens to `mousedown` event.
//      *
//      * @param {Object} event - The event.
//      */
// 	function onMouseDown(event) {
//         mouseX = event.clientX;
//         mouseY = event.clientY;
//         isMouseDown = true;
//     }
//
// 	// mouse button released
//     element.addEventListener('mouseup', onMouseUp);
//
// 	/**
//      * Listens to `mouseup` event.
//      *
//      * @param {Object} event - The event.
//      */
// 	function onMouseUp(event) {
//         isMouseDown = false;
//         dispX = (planeObject.vx * planeObject.vx) / (2 * friction * Math.sign(planeObject.vx) * -1);
//         dispY = (planeObject.vy * planeObject.vy) / (2 * friction * Math.sign(planeObject.vy) * -1);
//         elementX = parseInt(element.style.left) - Math.max(Math.min(dispX, 200), -200) || 0;
//         elementY = parseInt(element.style.top) - Math.max(Math.min(dispY, 200), -200) || 0;
//         element.style.left = elementX +'px';
//         element.style.top = elementY +'px';
//     }
//
// 	// need to attach to the entire document
//     // in order to take full width and height
//     // this ensures the element keeps up with the mouse
//     document.addEventListener('mousemove', onMouseMove);
//
// 	/**
//      * Listens to `mousemove` event.
//      *
//      * @param {Object} event - The event.
//      */
// 	function onMouseMove(event) {
//     	if (!isMouseDown) return;
//         var deltaX = event.clientX - mouseX;
//         var deltaY = event.clientY - mouseY;
//         planeObject.vx = event.movementX * 2;
//         planeObject.vy = event.movementY * 2;
//         element.style.left = elementX + deltaX + 'px';
//         element.style.top = elementY + deltaY + 'px';
//     }
// }
//
//  draggable(document.getElementById('playn'));
// // function throw () {
// //
// }
//
//
//
// requestAnimationFrame()
//


ScrollTrigger.batch(".randomElement", {
  scroller: planeWrapper,
  interval: 0.1,
  batchMax: 4,
  onEnter: batch => gsap.to(batch, {autoAlpha: 0.13, delay: 0.1, stagger: 0.15, overwrite: true}),
  onLeave: batch => gsap.set(batch, {autoAlpha: 1, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {autoAlpha: 0.13, delay: 0.1, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {autoAlpha: 1, overwrite: true}),
});
function goToStartScreen(placewheretogo){
  var startItem = $(placewheretogo);
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
function goToPlace(event){
  var startItem = $(event.data.placewheretogo);
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
  goToStartScreen('.startScreen');
});
$(".go-to-start-screen").click({placewheretogo: ".newWork"}, goToPlace);
$(".go-to-random").click({placewheretogo: ".lexicon"}, goToPlace);
$(".dropbtn").click({placewheretogo: ".startScreen"}, goToPlace);
$(".go-to-pacing").click({placewheretogo: ".pacingsnail"}, goToPlace);
$(".go-to-publications").click({placewheretogo: ".publications"}, goToPlace);
$(".go-to-participants").click({placewheretogo: ".participants"}, goToPlace);

$(".zoom-in").click(function() {
  var zoomLvl = parseInt(planez.data("zoom"));
  var zoomLvlNew = zoomLvl + 1;
  if (zoomLvl < 20) {
    var xOffset = planeWrapper.scrollLeft();
    var yOffset = planeWrapper.scrollTop();
    var screenW = planeWrapper.width()/2;
    var screenH = planeWrapper.height()/2;
    var x = (xOffset+screenW)*1.25-screenW;
    var y = (yOffset+screenH)*1.25-screenH;
    var fontSizeCurrent = parseFloat(planez.css("font-size"))/16;
    var fontSizeNew = fontSizeCurrent * 1.25;
    gsap.to(planeWrapper, {duration: 1, scrollTo: {y: y, x: x}});
    gsap.to(planez, {duration: 1, fontSize: fontSizeNew+"em"});
    planez.data("zoom",zoomLvlNew);
  }
});
$(".zoom-out").click(function() {
  var zoomLvl = parseInt(planez.data("zoom"));
  var zoomLvlNew = zoomLvl + 1;
  if (zoomLvl > 5) {
    var zoomLvlNew = zoomLvl - 1;
    var xOffset = planeWrapper.scrollLeft();
    var yOffset = planeWrapper.scrollTop();
    var screenW = planeWrapper.width()/2;
    var screenH = planeWrapper.height()/2;
    var x = (xOffset+screenW)/1.25-screenW;
    var y = (yOffset+screenH)/1.25-screenH;
    var fontSizeCurrent = parseFloat(planez.css("font-size"))/16;
    var fontSizeNew = fontSizeCurrent / 1.25;
    gsap.to(planeWrapper, {duration: 1, scrollTo: {y: y, x: x}});
    gsap.to(planez, {duration: 1, fontSize: fontSizeNew+"em"});
    planez.data("zoom",zoomLvlNew);
  }
});

var currentZoom = 1.0;


      $('#btn_ZoomIn').click(
          function () {
            console.log('hi')
              $('.planez').animate({ 'zoom': currentZoom += .1 }, 'slow');
          });
      $('#btn_ZoomOut').click(
          function () {
              $('.planez').animate({ 'zoom': currentZoom -= .1 }, 'slow');
          });
      $('#btn_ZoomReset').click(
          function () {
              currentZoom = 1.0
              $('.planez').animate({ 'zoom': 1 }, 'slow');
          });
  // });
