
var planez = $(".planez");
var playn = $("#playn");
var planeWrapper = $(".planeWrapper");

    document.querySelector('.topper').addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector('.newstartScreen').scrollIntoView({ behavior: 'smooth', easing: 'ease-in;', block: 'center', inline: 'center' });
        });
document.querySelector('.go-to-start-screen').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.newWork').scrollIntoView({ behavior: 'smooth', easing: 'ease-in;', block: 'start', inline: 'center' });
    });
document.querySelector('.go-to-random').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#canvasParent').scrollIntoView({ behavior: 'smooth', easing: 'ease-in;', block: 'start', inline: 'center' });
    });
document.querySelector('.projects').addEventListener('click', function(e) {
      e.preventDefault();
      location.hash = "#projects";
      document.querySelector('.startScreen').scrollIntoView({ behavior: 'smooth', easing: 'ease-in;', block: 'start', inline: 'center' });
    });
document.querySelector('.historyandmission').addEventListener('click', function(e) {
      e.preventDefault();
      location.hash = "#historymission";
      document.querySelector('.startScreen').scrollIntoView({ behavior: 'smooth', easing: 'ease-in;', block: 'start', inline: 'center' });
    });
// document.querySelector('.go-to-pacing').addEventListener('click', function(e) {
//       e.preventDefault();
//       document.querySelector('.pacingsnail').scrollIntoView({ behavior: 'smooth' });
//     });
document.querySelector('.go-to-publications').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.publications').scrollIntoView({ behavior: 'smooth', easing: 'ease-in;', block: 'start', inline: 'center' });
    });
document.querySelector('.go-to-participants').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.participants').scrollIntoView({ behavior: 'smooth', easing: 'ease-in;', block: 'start', inline: 'center' });
    });
document.querySelector('.snaillexicon').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#canvasParent').scrollIntoView({ behavior: 'smooth', easing: 'ease-in;', block: 'start', inline: 'center' });
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
  goToStartScreen('.newstartScreen');
});
// $(".go-to-start-screen").click({placewheretogo: ".newWork"}, goToPlace);
// $(".go-to-random").click({placewheretogo: ".lexicon"}, goToPlace);
// $(".dropbtn").click({placewheretogo: ".startScreen"}, goToPlace);
// $(".go-to-pacing").click({placewheretogo: ".pacingsnail"}, goToPlace);
// $(".go-to-publications").click({placewheretogo: ".publications"}, goToPlace);
// $(".go-to-participants").click({placewheretogo: ".participants"}, goToPlace);


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
              $('.planez').animate({ 'zoom': currentZoom = 0.10 }, 'slow');
          });
          // $('#btn_ZoomIn').click(
          //     function () {
          //       console.log('hi')
          //         $('.planez').animate({ 'zoom': currentZoom += .1 }, 'slow');
          //     });
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
