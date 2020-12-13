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
    line(0,0,this.x,this.y);
    this.element.position(this.x+width/2, this.y+height/2);
    pop();
  }

}
function setup() {
createCanvas(800,800);
frameRate(20);
const words = [ 'Pacing', 'All Ways', 'Relation'];
const links = ['google.com', 'facebook.com', 'instagram.com'];
  for (let j = 0; j < words.length; j++) {
    const spannedWord = createA(links[j], words[j]);
    const dw = new DanceSpan(spannedWord, random(600), random(200));
    dancingWords.push(dw);
  }
}

function draw() {
background(255);
for (let i = 0; i < dancingWords.length; i++) {
  dancingWords[i].oscillate();
  dancingWords[i].brownian();
}
}
function pal(t){
  const currentDiv = document.getElementById("newContent");
  currentDiv.textContent = t;
}
