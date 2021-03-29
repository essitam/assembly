document.getElementById("changeColor").addEventListener("click", function() {
  document.getElementsByClassName("planez")[0].style.backgroundImage = "linear-gradient(to bottom right, #98f542, #42f566, #4269f5, #5de8bc, #5da669)";
});

document.getElementById("changeColor2").addEventListener("click", function() {
  document.getElementsByClassName("planez")[0].style.backgroundImage = "linear-gradient(to bottom right, #1c239e, #4cb5b3, #6364c2)";
});

document.getElementById("changeColor3").addEventListener("click", function() {
  document.getElementsByClassName("planez")[0].style.backgroundImage = "linear-gradient(to bottom right, #adc263, #89c996, #bd9179, #fffa6e)";
});
document.getElementById("changeColor4").addEventListener("click", function() {
  document.getElementsByClassName("planez")[0].style.backgroundImage = "linear-gradient(to bottom right, red, blue)";
});
document.getElementById("changeColor5").addEventListener("click", function() {
  document.getElementsByClassName("planez")[0].style.backgroundImage = "linear-gradient(to bottom right, grey, grey)";
});
document.getElementsByClassName('controls')[0].style.height = window.innerHeight;
