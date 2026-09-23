// Jaden Collado
//circles
let r1 = 128;
let g1 = 0;
let b1 = 0;

let r2 = 0;
let g2 = 128;
let b2 = 0;

let r3 = 0;
let g3 = 0;
let b3 = 128;

let r4 = 128
let g4 = 128
let b4 = 128

let r5 = 0
let g5 = 0
let b5 = 0

let right = 0


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(r4, g4, b4);
  strokeWeight (5);
  //move mouse to affect circles
  stroke (r1, g1, b1);
  ellipse (200, 150, mouseX, mouseY);
  stroke (r2, g2, b2);
  ellipse (400, 300, mouseX, mouseY);
  stroke (r3, g3, b3);
  ellipse (600, 150, mouseX, mouseY);
  stroke (r5, g5 , b5)
  ellipse (right, 500, 200, 200)

  right +=1
  if (right > width)

  right = 0
 
  }
function keyPressed () {
 if (key === 'q') // increase red of left circle by 5

  r1 += 5;

 if (key === 'Q') // decrease red of left circle by 5

  r1 -= 5;

 if (key === 'w') // increase green of left circle by 5

  g1 += 5;
 
 if (key === 'W') // decrease green of left circle by 5

  g1 -= 5;

 if (key === 'e') // increase blue of left circle by 5
 
  b1 += 5;

 if (key === 'E') // decrease blue of left circle by 5

  b1 -= 5;

 if (key === 'r') // increase red of middle circle by 5
 
  r2 += 5;

 if (key === 'R') // decrease red of middle circle by 5

  r2 -= 5;

 if (key === 't') // increase green of middle circle by 5

  g2 += 5;

 if (key === 'T') // decrease green of middle circle by 5

  g2 -= 5;

 if (key === 'y') // increase blue of middle circle by 5
  
  b2 += 5;

 if (key === 'Y') // decrease blue of middle circle by 5

  b2 -= 5;

 if (key === 'u') // increase red of right cirle by 5

  r3 +=5;

 if (key === 'U') // decrease red of right circle by 5

  r3 -=5;

 if (key === 'i') // increase green of right circle by 5
  
  g3 +=5;

 if (key === 'I') //decrease green of right circle by 5

  g3 -=5;

 if (key === 'o') //increase blue of right circle by 5

  b3 +=5;

 if (key === 'O') //decrease blue of right circle by five

  b3 -=5;

 if (key === 'p') // increase red of background by 5

  r4 +=5

 if (key === 'P') // decrease red of background by 5

  r4 -=5

 if (key === 'a') // increase green of background by 5

  g4 +=5 

 if (key === 'A') // decrease green of background by 5

  g4 -=5

 if (key === 's') // increase blue of background by 5
  
  b4 +=5

 if (key === 'S') // decrease blue of background by 5

  b4 -=5

 if (key === 'd') // increase red of bottom circle by 5

  r5 +=5

 if (key === 'D') // decrease red of bottom circle by 5

  r5 -=5

 if (key === 'f') // increase green of bottom circle by 5
  
  g5 +=5

 if (key === 'F') // decrease green of bottom circle by 5

  g5 -=5

 if (key === 'g') // increase blue of bottom circle by 5

  b5 +=5

 if (key === 'G') // decrease blue of bottom circle by 5

  b5 -= 5

 if (key === 'H'){
  r1 = random (255)
  g1 = random (255)
  b1 = random (255)
  r2 = random (255)
  g2 = random (255)
  b2 = random (255) 
  r3 = random (255)
  g3 = random (255)//make all colors random
  b3 = random (255)
  r4 = random (255)
  g4 = random (255)
  b4 = random (255)
  r5 = random (255)
  g5 = random (255)
  b5 = random (255)
}
}