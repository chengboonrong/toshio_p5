class Star{

	constructor(x,y){
		this.x = random(-windowWidth, windowWidth);
		this.y = random(-windowHeight, windowHeight);
		this.z = random(windowWidth);
	}

	show(){
		fill(255);
		noStroke();

		let sx = map(this.x / this.z, 0, 1, 0, windowWidth);
		let sy = map(this.y / this.z, 0, 1, 0, windowHeight);
		let r = map(this.z, 0, windowHeight, 16, 0);

		ellipse(sx,sy,r,r);
	}

	update(){
		this.z = this.z - speed;
		if(this.z < 1){
			this.z = random(windowWidth);
			this.x = random(-windowWidth, windowWidth);
			this.y = random(-windowHeight, windowHeight);
		}
	}
}


var stars = new Array(1000);
let speed = 5;

function setup(){
	createCanvas(windowWidth, windowHeight-5);

	for (var i = 0; i < stars.length; i++) {
		stars[i] = new Star();
	}
}

function draw (){
	speed = mouseX/100;


	r = map(mouseY,0, 255, 0, windowHeight/2);
	b = map(mouseY,255, 0, windowHeight/2, windowHeight);
	background(r,150,b);

	translate(windowWidth/2, windowHeight/2);
	for (var i = 0; i < stars.length; i++) {
		stars[i].update();
		stars[i].show();
	}
}
