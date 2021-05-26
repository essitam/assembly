var nav = $(".planez");

var mousePosX = 2500;
var mousePosY = 2500;

nav.draggable({
  containment: "planeWrapper",
  stop: function(event, ui){

      var x = event.pageX - ui.offset.left;
      var y = event.pageY - ui.offset.top;

      mousePosX = x;
      mousePosY = y;

      $("#pos").html(x + ', ' + y);
  }
});

// function move_up() {
//   document.getElementById('divElem').scrollTop += 10;
// }
//
// function move_down() {
//   document.getElementById('divElem').scrollTop -= 10;
// }

document.querySelector('.jump').addEventListener('click', function(e) {

  var nullObject = document.querySelector('.null1');
  var randomX = getRandomNumber(200, 7100);
  console.log(randomX, randomY);
  var randomY = getRandomNumber(200, 7100);
  nullObject.style.top = randomX+'px';
  nullObject.style.left = randomY+'px';
    e.preventDefault();
  nullObject.scrollIntoView({ behavior: 'smooth', easing: 'ease-in;', block: 'start', inline: 'center' });
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
