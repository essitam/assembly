class Oscillator {
constructor( angle, velocity, amplitude) {
  this.angle= createVector();
  this.velocity = createVector(random(-0.05, 0.05),random(-0.05, 0.05));
  this.amplitude = createVector(random(20, width/2),random(20, height/2));
}
oscillate(){
  this.angle.add(this.velocity);
}
display(){
 let x = sin(this.angle.x) * this.amplitude.x;
 let y = sin(this.angle.y) * this.amplitude.y;
  push();
  translate(width/2, height/2);
  stroke(255);
  fill(127, 127);
  line(0,0,x,y);
  ellipse(x,y,32,32);
  pop();
}
}
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
var links = ['#', '#', '#'];
var funct = [activate0(), activate1(), activate2()];
function setup() {
createCanvas(windowWidth, 100);
frameRate(15);
const words = [ 'Pacing', 'All Ways', 'Relation'];
  for (let o = 0; o < words.length; o++) {
    const spannedWord = createButton(words[o]);
    spannedWord.id('yourElId'+o);
    spannedWord.mousePressed(activate0);
    const dw = new DanceSpan(spannedWord, random(600), random(200));
    dancingWords.push(dw);
  }
}

function draw() {
  background(190);

for (let i = 0; i < dancingWords.length; i++) {
  dancingWords[i].oscillate();
  dancingWords[i].brownian();
  }

  if (eld0==true){
    eld1=false;
    eld2=false;
    for (let i = 0; i < dancing.length; i++) {
      dancing[i].oscillate();
      document.getElementById('yourElId0').style.backgroundColor= 'lightgrey';
      var a = getOffset( document.getElementById('yourElId0') ).right;
      var b = getOffset( document.getElementById('yourElId0') ).top;
      dancing[i].around(a , b);
      }
  }
  if (eld1==true){
    eld0=false;
    eld2=false;
    for (let i = 0; i < dancing.length; i++) {
      dancing[i].oscillate();
      document.getElementById('yourElId1').style.backgroundColor= 'lightgrey';
      var a = getOffset( document.getElementById('yourElId1') ).right;
      var b = getOffset( document.getElementById('yourElId1') ).top;
      dancing[i].around(a , b);
      }
  }
  if (eld2==true){
    eld1=false;
    eld0=false;
    for (let i = 0; i < dancing.length; i++) {
      dancing[i].oscillate();
      document.getElementById('yourElId2').style.backgroundColor= 'lightgrey';
      var a = getOffset( document.getElementById('yourElId2') ).right;
      var b = getOffset( document.getElementById('yourElId2') ).top;
      dancing[i].around(a , b);
      }
  }

}

function activate0(i){
  for (let j = 0; j < list.length; j++) {
    const spannedWord = createA(links[j], list[j]);
    const dw = new DanceSpan(spannedWord, random(600), random(200));
    dancing.push(dw);
  }
  if (i = 0){
    eld0=true;
  }

}
// function activate1(){
//   for (let j = 0; j < list.length; j++) {
//     const spannedWord = createA(links[j], list[j]);
//     const dw = new DanceSpan(spannedWord, random(600), random(200));
//     dancing.push(dw);
//   }
//   eld1=true;
// }
// function activate2(){
//   for (let j = 0; j < list.length; j++) {
//     const spannedWord = createA(links[j], list[j]);
//     const dw = new DanceSpan(spannedWord, random(600), random(200));
//     dancing.push(dw);
//   }
//   eld2=true;
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
