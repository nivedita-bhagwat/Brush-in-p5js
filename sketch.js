function setup() {
  createCanvas(500,500);

  // R, G & B values.
  background(255, 204, 0);

  // take a big brush
  strokeWeight(30);
  // dip it in color purple
  stroke('darkblue');
  // frameRate(10);
}

function draw() {
  //declare variables
  let posY = mouseY;
  let posX = mouseX;
  // place a dot on a screen
  point(posX, posY);  
}


