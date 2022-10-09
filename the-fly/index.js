const width = 500;
const height = 500;

function setup() {
    createCanvas(width, height);
}

var inc = 0.01;
var xOffset = 0;
var yOffset = height;

function draw() {
    background(0);
    
    stroke(255, 25, 2);
    
    var x = map(noise(xOffset), 0, 1, 0, width);
    var y = map(noise(yOffset), 0, 1, 0, height);

    circle(x, y, 10, 10);

    xOffset += inc;
    yOffset -= inc;
}
