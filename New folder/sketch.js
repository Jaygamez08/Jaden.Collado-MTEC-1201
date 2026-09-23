let r = 255;
let g = 255;
let b = 255;


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() 
{
  background(220);

  if (mouseX > width / 2)
  {
    fill(255, 0, 0)
    ellipse(width/2, height/2, 100, 100)
    print("TEST 1 is TRUE");
    rect(width / 2, height / 4, 50, 50);
  }
  else if (mouseY > height / 2)
  {
    fill(0);
    rect(width / height, height / 2, 100, 100);
    print("TEST 2 is TRUE");
    rect(width / 2, height / 4, 50, 50);
  }
  else
  {
    fill(255);
    rect(width / 2, height / 2, 100, 100);
    print("TEST 1 & TEST 2 are both FALSE")
  }

}

function mousePressed()
{
  r = random(255);
  print(r);
  g = random(255);
  b = random(50, 100);

}
