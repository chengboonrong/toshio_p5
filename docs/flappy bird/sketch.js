function Bird(){
	this.y = windowHeight/2;
	this.x = windowWidth/5;

	this.gravity = 1;
	this.velocity = 0;

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, 32,32);
	}

	this.update = function() {
		this.velocity += this.gravity*0.8;
		this.y += this.velocity;
		if (this.y > windowHeight){
			this.y = windowHeight-20;
			this.velocity = 0;
		}

		if (this.y < 0){
			this.y = 0;;
			this.velocity = 0;
		}
	}

	this.up = function() {
		this.velocity = 0;
		this.velocity += -this.gravity*15;
		this.y -= this.velocity;
	}

}

function Pipes() {
	this.top = random(windowHeight/5,windowHeight/2.2);
	this.bottom = random(windowHeight/5, windowHeight/2.2);
	this.x = windowWidth;
	this.w = 20;
	this.spd = 3;

	this.show = function(){
		fill(255);
		rect(this.x, 0, this.w, this.top);
		rect(this.x, windowHeight, this.w, -this.bottom);
	}

	this.update = function() {
		this.x -= this.spd;
	}

	this.offScreen = function(){
		if(this.x < this.w){
			return true;
		}
		else{
			return false;
		}
	}

	this.hit = function(x) {
		if (x.y < this.top || x.y > windowHeight - this.bottom){
			if (x.x > this.x && x.x < this.x + this.w) {
				return true;
			}
		}

		return false;
	}
}

var pipes = [];

function setup() {
	createCanvas(windowWidth, windowHeight-10);
	x = new Bird();
	pipes.push(new Pipes());
}

function draw(){
	background(0);
	x.show();
	x.update();

	if (frameCount % 140 == 0){
		pipes.push(new Pipes());
	}

	for (var i = pipes.length-1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();

		if(pipes[i].hit(x)){
			// x.velocity = 0;
			// x.gravity = 0;

			pipes[i].spd = -100;
		}

		if(pipes[i].offScreen()){
			pipes.splice(i,1);
		}
	}
}

function keyPressed(){
	if(key = ' '){
		x.up();
	}
}
