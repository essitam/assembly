let n;
let steps = 0;
function setup(){
    createCanvas(windowWidth, windowHeight);
    // canv.parent('canv');
}

function draw(){
        // background('red');

            var angle = PI/6;
            var length = 60;
            translate(width/2, height);
            // for (var i = 1; i < 10000; i++){
            // n =+ 500;
            n = 500;
            do {
              n = collatz(n);
                if(n % 2 == 0){
                  rotate(angle);
                } else {
                  rotate(-angle);
                }
                stroke(82, 180, 100);
                fill(255);
                ellipse(mouseY,mouseX,n*sin(millis()/1000),cos(millis()/1000)*-length);
                translate(0, -length);
                steps++;
            } while (n != 1);
          //   console.log("steps" + steps);
          // // }
          // console.log("finished");

}

function collatz(n) {
    if(n % 2 == 0){
      return n / 2;
    } else {
      return n * 3 + 1;
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
