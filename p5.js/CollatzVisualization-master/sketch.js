let numberInput;
let currentSpan;

let points = [];

function collatz(n) {
	let results = [];
	while (n > 1) {
		results.push(n);
		if (n % 2 == 0) {
			n = n / 2;
		} else {
			n = (3 * n) + 1;
		}
	}
	results.push(1);
	return results;
}

function updatePoints() {
	points = collatz(Number(numberInput.value()));
}

function setup() {
	createCanvas(windowWidth - 30, windowHeight - 100);
	background(51);
	createP('');
	createSpan('Enter Number: ')
	numberInput = createInput();
	// numberInput = createSlider(1, 200, 2, 1);
	// numberInput.style('width', '800px');
	numberInput.input(updatePoints);
	currentSpan = createSpan(numberInput.value());
	let about = createP();
	about.html('<a href="/about.html">Confused?</a>');
}

let markWidth = 15;
let markPad = 5;

function draw() {
	currentSpan.html(`${numberInput.value()}`);
	background(21);
	if (points.length > 0) {
		// limit max size but shrink if we run out of space
		if ((width / (markWidth + markPad)) < points.length) {
			let pixelsPerMark = width / points.length;
			markWidth = pixelsPerMark * 0.67;
			markPad = pixelsPerMark * 0.27;
		} else {
			// space out to fill canvas but don't make the dots bigger
			let pixelsPerMark = width / points.length;
			markPad = pixelsPerMark - markWidth;
		}

		let max = points.reduce((pv, cv) => pv > cv ? pv : cv);

		for (let i = 0; i <= 8; i++) {
			fill(255);
			textAlign(CENTER, CENTER);
			textSize(28);
			text(max * ((8 - i) / 8), 35, 30 + (i / 8) * (height - 60));
		}


		fill(255, 210);
		let x = 100;
		for (let i = 0; i < points.length; i++) {
			let y = map(points[i], 0, max, height - 30, 30);
			ellipse(x, y, markWidth, markWidth);
			x += (markWidth + markPad);
		}
	}

	// reset to default for spacing calculation
	markPad = 5;

}

function keyPressed() {
	if (keyCode == 38 || keyCode == 39) {
		numberInput.value(Number(numberInput.value()) + 1);
		updatePoints();
	} else if (keyCode == 37 || keyCode == 40) {
		numberInput.value(numberInput.value() - 1);
		updatePoints();
	}
}
