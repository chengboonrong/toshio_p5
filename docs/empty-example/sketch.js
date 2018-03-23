function setup() {
  var col = 0;

  createCanvas(windowWidth,windowHeight-10);
}

function draw() {
  // background
  col = map(mouseX, 0, windowWidth, 0, 255); // map(var, var_rangefrom, var_rangeto, rangefrom, rangeto)
  background(col);

  // ellipse
  fill(250, 118, 222);
  ellipse(mouseX, windowHeight/2, 64, 64);
}