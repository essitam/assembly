
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
    this.element.style('padding', '0.2em');
    pop();
  }

}
var eld0 = false
var eld1 = false;
var eld2 = false;;
var list = ["1", "2", "3"];
var links = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'];

  var a = function(){ lexicon(pace);playSound(paceAudio);};
  var b = function(){ lexicon(water) }
  var c = function(){ lexicon(languaging) }
  var d = function(){ lexicon(treasure);playSound(treasuringAudio);};
  var e = function(){ lexicon(rally)};
  var f = function(){ lexicon(truths)};
  var g = function(){ lexicon(twallowing);};
  var h = function(){ lexicon(tressing);playSound(tressingAudio);};
  var i = function(){ lexicon(relation)};
  var j = function(){ lexicon(rhythm)};
  var k = function(){ lexicon(motioning);playSound(motioningAudio);};

 var foo = [a,b,c,d,e,f,g,h,i,j,k];

//menu at the top
function setup() {
var canvas= createCanvas(600, 100);
canvas.parent('canvasParent');
frameRate(15);
const words = ['Pace', 'Water', 'Languaging', 'Treasure', 'Rally', 'Truths', 'Twallowing', 'Tressing', 'Relation', 'Rhythm', 'Motioning'];
  for (let o = 0; o < words.length; o++) {
    const spannedWord = createButton(words[o]);
    spannedWord.mousePressed(foo[o]);
    spannedWord.addClass('dropbtn');
    spannedWord.addClass('dropbtnn');
    spannedWord.parent('canvasParent');
    const dw = new DanceSpan(spannedWord, random(600), random(200));
    dancingWords.push(dw);
  }
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
var motioningSound = ["assets/assets/lexicon-words/motioning/motioning_1.mp3", "assets/assets/lexicon-words/motioning/motioning.mp3", "assets/assets/lexicon-words/motioning/motioning_2.mp3", "assets/assets/lexicon-words/motioning/motioning_3.mp3"]
var paceSound = ["assets/assets/lexicon-words/pace/pace_1.mp3", "assets/assets/lexicon-words/pace/pace.mp3", "assets/assets/lexicon-words/pace/pace_2.mp3", "assets/assets/lexicon-words/pace/pace_3.mp3", "assets/assets/lexicon-words/pace/pace_4.mp3"];
var treasuringSound = ["assets/assets/lexicon-words/treasuring/treasuring_1.mp3", "assets/assets/lexicon-words/treasuring/treasuring.mp3", "assets/assets/lexicon-words/treasuring/treasuring_2.mp3", "assets/assets/lexicon-words/treasuring/treasuring_3.mp3"];
var tressingSound = ["assets/assets/lexicon-words/tressing/tressing_2.mp3", "assets/assets/lexicon-words/tressing/tressing_3.mp3", "assets/assets/lexicon-words/tressing/tressing_4.mp3", "assets/assets/lexicon-words/tressing/tressing_5.mp3", "assets/assets/lexicon-words/tressing/tressing_1.mp3", "assets/assets/lexicon-words/tressing/tressing.mp3"];
var languagingSound = ["assets/assets/lexicon-words/languaging/languaging_2.mp3", "assets/assets/lexicon-words/languaging/languaging_3.mp3", "assets/assets/lexicon-words/languaging/languaging.mp3"];
var rallySound = ["assets/assets/lexicon-words/rally/rally_1.mp3", "assets/assets/lexicon-words/rally/rally_2.mp3", "assets/assets/lexicon-words/rally/rally_3.mp3", "assets/assets/lexicon-words/rally/rally.mp3"];
var relationSound = ["assets/assets/lexicon-words/relation/relation_1.mp3", "assets/assets/lexicon-words/relation/relation_2.mp3", "assets/assets/lexicon-words/relation/relation_3.mp3", "assets/assets/lexicon-words/relation/relation.mp3"];
var rhythmSound = ["assets/assets/lexicon-words/rhythm/rhythm_1.mp3", "assets/assets/lexicon-words/rhythm/rhythm_2.mp3", "assets/assets/lexicon-words/rhythm/rhythm_3.mp3", "assets/assets/lexicon-words/rhythm/rhythm_4.mp3", "assets/assets/lexicon-words/rhythm/rhythm_5.mp3", "assets/assets/lexicon-words/rhythm/rhythm.mp3"];
var truthsSound = ["assets/assets/lexicon-words/truths/truths_1.mp3", "assets/assets/lexicon-words/truths/truths_2.mp3", "assets/assets/lexicon-words/truths/truths_3.mp3", "assets/assets/lexicon-words/truths/truths.mp3"];
var twallowingSound = ["assets/assets/lexicon-words/twallowing/twallowing_1.mp3", "assets/assets/lexicon-words/twallowing/twallowing.mp3", "assets/assets/lexicon-words/twallowing/twallowing_2.mp3", "assets/assets/lexicon-words/twallowing/twallowing_3.mp3"];
var waterSound = ["assets/assets/lexicon-words/water/water_1.mp3", "assets/assets/lexicon-words/water/water_2.mp3", "assets/assets/lexicon-words/water/water_3.mp3", "assets/assets/lexicon-words/water/water_4.mp3", "assets/assets/lexicon-words/water/water.mp3"];
function randFromArray(array){
  const randomThing = Math.floor(Math.random() * array.length);
  return(array[randomThing]);
  }


  var motioningAudio = new Audio(randFromArray(motioningSound));
  var paceAudio = new Audio(randFromArray(paceSound));
  var treasuringAudio = new Audio(randFromArray(treasuringSound));
  var tressingAudio = new Audio(randFromArray(tressingSound));
  var languagingAudio = new Audio(randFromArray(languagingSound));
  var rallyAudio = new Audio(randFromArray(rallySound));
  var relationAudio = new Audio(randFromArray(relationSound));
  var rhythmAudio = new Audio(randFromArray(rhythmSound));
  var truthsAudio = new Audio(randFromArray(truthsSound));
  var twallowingAudio = new Audio(randFromArray(twallowingSound));
  var waterAudio = new Audio(randFromArray(waterSound));
function playSound(letter) {
        letter.play();
}

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
