const width = 500;
const height = 500;

function setup() {
    createCanvas(width, height);
}

var zoff = 0;

function draw() {
    noStroke();
    
    var yoff = 0;
    var rectScale = 10; // in relation to a pixel
    var noiseScale = 0.1; // full noise image scale
    
    for(var y = 0; y < width; y += rectScale) {
        var xoff = 0;

        for(var x = 0; x < width; x += rectScale) {
            var color = noise(xoff, yoff, zoff) * 255;

            /* this condition turns contrast up by 100%
            if(color > 127.5) {
                color = 255;
            } else {
                color = 0;
            }
            */

            fill(color);
            
            rect(x, y, rectScale, rectScale);

            xoff += noiseScale;
        }

        yoff += noiseScale;
    }

    zoff += 0.1; // adjust the speed of time
}

