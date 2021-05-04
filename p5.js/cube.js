class Cube {
	constructor(x, y, z) {
		this.x = random(10, 100);
		this.y = random(10, 100);
		this.z = random(10, 100);

	}

	hide () {
	if (this.x>=width/2) {
	cubeHide = !cubeHide;
		}
	}

	display() {

		stroke(255);
		strokeWeight(1);
		let c = random(0, 255);
		let b = random(0, 100);
		fill(255,c,b,10);
		box(this.x, this.y, this.z);

		}






	grow() {

			if (this.x <= width / 4) {
				this.x = this.x + 0.25;
			} else {
				this.x = this.x * -1;
			}
			if (this.y <= height / 4) {
				this.y = this.y + 0.25;
			} else {
				this.y = this.y * -1;
			}
			if (this.z <= width / 4) {
				this.z = this.z + 0.25;
			} else {
				this.z = this.z * -1;
			}


	}
}
