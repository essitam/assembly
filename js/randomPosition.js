
//random position
function randomPosition(){
  const divs = document.querySelectorAll('.child');

  // get window width and height
//     var winWidth = window.innerWidth;
// var winHeight = window.innerHeight;
var winWidth = 4000;
var winHeight = 2000;
  // i stands for "index". you could also call this banana or haircut. it's a variable
  for ( var i=0; i < divs.length; i++ ) {

      // shortcut! the current div in the list
      var thisDiv = divs[i];

      // get random numbers for each element
      randomTop = getRandomNumber(0, winHeight);
      randomLeft = getRandomNumber(0, winWidth);

      // update top and left position
      thisDiv.style.position= 'absolute';
      thisDiv.style.top = randomTop +"px";
      thisDiv.style.left = randomLeft +"px";

  }
}

  // function that returns a random number between a min and max
  function getRandomNumber(min, max) {

    return Math.random() * (max - min) + min;

  }
