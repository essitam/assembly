
// Acceleration value between 0 and 1
// Smaller values result in a slower/smoother looking animation
var acceleration = 0.05;

var img = {
  element: document.querySelector("#img"),
  xMax: 0,
  yMax: 0,
  x: 0,
  y: 0
};

var mouse = { x: 0, y: 0 };

var vw = 0;
var vh = 0;

function init() {
  
  // Sets viewport dimensions and img x/y limits
  resize();
    
  // Set _gsTransform on element
  TweenLite.set(img.element, { x: 0, y: 0 });
  
  // Alias for _gsTransform object
  var pos = img.element._gsTransform;
    
  // What you set for the x, y, and duration really doesn't 
  // matter since we're not using them. We just want an 
  // infinite tween that will run the modifier functions
  TweenMax.to(img.element, 1000, {
    x: 0, 
    y: 0, 
    repeat: -1,
    ease: Linear.easeNone,
    modifiers: {
      x: function() {
        img.x = map(mouse.x, 0, vw, 0, img.xMax);
        return pos.x + (img.x - pos.x) * acceleration;
      },
      y: function() {        
        img.y = map(mouse.y, 0, vh, 0, img.yMax);
        return pos.y + (img.y - pos.y) * acceleration;
      }
    }
  });
  
  window.addEventListener("mousemove", moveAction);
  window.addEventListener("touchmove", moveAction);
  window.addEventListener("resize", resize);
}

/**
 * @param {number} x value to map
 * @param {number} a source min value
 * @param {number} b source max value
 * @param {number} c destination min value
 * @param {number} d destination max value
 */
function map(x, a, b, c, d) {
  return c + (d - c) * ((x - a) / (b - a)) || 0;
}

function resize() {
  
  vw = window.innerWidth;
  vh = window.innerHeight;
  
  img.xMax = vw - img.element.naturalWidth;
  img.yMax = vh - img.element.naturalHeight;
}

function moveAction(event) {
  
  if (event.targetTouches && event.targetTouches[0]) {
    event.preventDefault();
    mouse.x = event.targetTouches[0].clientX;
    mouse.y = event.targetTouches[0].clientY;           
  } else {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  }
}

// Initialize app once image has loaded
window.addEventListener("load", init);








