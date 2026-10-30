function setup() 
{
    createCanvas(800, 600);
    rectMode(CENTER);
}

function draw() //loops forever, keep repeating
{
    background(220);


    let x = 50; // LOCAL variable

    while(x < width);
    {
        circle(x, height/2, 75);
        x += 100;
    }
}