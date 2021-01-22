
let dancingWords = [];
let dancing = [];
class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
    this.angle= createVector();
    this.velocity = createVector(random(-0.05, 0.05),random(-0.05, 0.05));
    this.amplitude = createVector(random(20, width/2),random(20, height/2));
  }
  oscillate(){
    this.angle.add(this.velocity);
  }

  brownian() {
    this.x = sin(this.angle.x) * this.amplitude.x;
    this.y = sin(this.angle.y) * this.amplitude.y;
    push();
    translate(width/2, height/2);
    strokeWeight(4);
    // line(0-this.x,0-this.x,this.x,this.y);
    this.element.position(this.x+width/2, this.y+height/2);
    // this.element.style('background-color','lightgrey');
    this.element.style('transform', 'skewY('+this.y+'deg)');
    this.element.style('padding', '0.2em')
    pop();
  }
  around(a, b) {
    this.x = sin(this.angle.x) * this.amplitude.x/2;
    this.y = sin(this.angle.y) * this.amplitude.y/2;
    push();
    translate(width/2, height/2);
    strokeWeight(2);
    line(a,b,this.x,this.y);
    this.element.position(this.x+width/2, this.y+height/2);
    this.element.style('background-color','lightgrey');
    this.element.style('padding', '0.2em')
    pop();
  }

}
var eld0 = false
var eld1 = false;
var eld2 = false;;
var list = ["1", "2", "3"];
var links = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'];

var pacingProjects=["walking-drawing machines", "algo-rhythms", "the film S/Pace", "Poetry chapbooks", "Painting on Film", "Tic and Stick", "S/Pace","Improvisation Work in Studio"]
var pacingLinks=["#walkingdrawing", "#algo", "#filmspace", "#poetry", "#paintingfilm", "#ticstick", "#space", "#improvisation"];
var allwaysProjects = ["Water and Repetition Experiments", "Biograms", "Reforming DX", "The Movement of Thought", "Like Water I Am", "Painting and Movement", "Drawing Affect", "Water and Ice", "Duration and Detail", "Notebooks", "Mobile Writing", "Poetry", "Improvisation Work in Studio"];
var relationProjects =["Relationshapes", "Biograms", "Autism to Inclusion Film", "Recipes for the Open", "Drawing Affect", "Painting and Movement", "Like Water I Am", "Repetition", "Poetry", "Film (S/Pace)", "Tic and Stick", "Access is Love and Love is Complicated"];

  var a = function(){ createSticks(pacingProjects, pacingLinks)};
  var b = function(){ createSticks(allwaysProjects) }
  var c = function(){ createSticks(relationProjects) }
    var d = function(){  }

 var foo = [a,b,c];



//menu at the top
function setup() {
createCanvas(windowWidth, 100);
frameRate(15);
const words = [ 'Pacing', 'All Ways', 'Relation'];
  for (let o = 0; o < words.length; o++) {
    const spannedWord = createButton(words[o]);
    spannedWord.mousePressed(foo[o]);
    spannedWord.addClass('dropbtn');
    const dw = new DanceSpan(spannedWord, random(600), random(200));
    dancingWords.push(dw);
  }
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//dropdown menu
function createSticks(aText, bHref){

  //a is array of text
  //b is array of href
  const container = document.querySelector('#myDropdown');
  removeAllChildNodes(container);

  for (let c = 0; c < aText.length; c++) {
    var stickelement = document.createElement('a');
    stickelement.setAttribute('href', bHref[c]);
    stickelement.textContent = aText[c];
    var slant = document.getElementById('myDropdown');
    slant.appendChild(stickelement);
  }
  drop();
}
// function createSticks(aText, bHref){
//   //a is array of text
//   //b is array of href
//
//   for (let c = 0; c < aText.length; c++) {
//     var stickelement = document.createElement('a');
//     stickelement.setAttribute('href', '#');
//     stickelement.textContent = aText[c];
//     var slant = document.getElementById('slanting');
//     slant.appendChild(stickelement);
//   }
// }
function draw() {
  // background(210);

for (let i = 0; i < dancingWords.length; i++) {
  dancingWords[i].oscillate();
  dancingWords[i].brownian();
  }

}

function activate(i){
  for (let j = 0; j < list.length; j++) {
    const spannedWord = createA(links[j], list[j]);
    const dw = new DanceSpan(spannedWord, random(600), random(200));
    dancing.push(dw);
  }
  if (i = 0){
    eld0=true;
  }

}

// function changeId(){
//   var element = document.getElementById('hellohi');
//   element.setAttribute('id', 'like_button_container');
// }

function pal(t){
  const currentDiv = document.getElementById("newContent");
  currentDiv.textContent = t;
}

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
// var x =
