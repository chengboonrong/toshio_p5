var spot = {
	x: 100,
	y: 50
}

var col = {
	r:255,
	g:0,
	b:0
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw(){
	col.r = random(100,255);
	col.g = 0;
	col.b = random(100,190);
	spot.x = random(0, windowWidth);
	spot.y = random(0, windowHeight);
	noStroke();
	fill(col.r, col.g, col.b,100);
	ellipse(spot.x,spot.y,20,20);
}

function mouseClicked(){
	background(0);
}