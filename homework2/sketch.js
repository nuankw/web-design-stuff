var colorOfCubes = [[250, 250, 250, 100],[170,170,170,100]]; // white amd grays
var distance;
var dToOrigin;
var xPos;
var yPos;
var clickTimes;
function setup() {
    createCanvas(600, 600);
    background(0);
    clickTimes = 0;
    xPos = 0;
    distance = 250;
}
// png can be transparent (alpha value) while jpg does not have that transparency feature
function draw() {
    if (distance >= 2400 ) {
        noLoop();
    }
    // decide how big the two circles are based on mouse position
    dToOrigin = dist(0,0,mouseX,mouseY); 
    widthMapped = map(dToOrigin,0,dist(250,250,500,500),30,60);
    if (clickTimes % 2 == 1) {
        CubeDancing();
    }
    else {
        CircleDancing();        
    }
    distance++;
    rateOfDrawing = map(distance,200,5000,40,120);
    frameRate(rateOfDrawing);
}

function mousePressed() {
    clickTimes++;
}

function CubeDancing() {
        background(250-distance/0.0001,250-distance/0.0001,250-distance/0.0001,4);
        for (var i = 0; i < 2; i++) {
            fill(colorOfCubes[i]);
            xPos = 300+0.1*distance*cos(frameCount/25+PI*i);
            yPos = 300-0.1*distance*sin(frameCount/25+PI*i);
            if (i == 0) { // white
                stroke(100,100,100,50);
                strokeWeight(2);
            }
            else if (i == 1) { // gray
                stroke(240,240,240,50);
                strokeWeight(2);
            }
            rect(xPos-widthMapped/2,yPos-widthMapped/2,widthMapped,widthMapped);
        }
}

function CircleDancing() {
        background(distance/0.000001,distance/0.000001,distance/0.000001,4);
        for (var i = 0; i < 2; i++) {
            fill(colorOfCubes[i]);
            xPos = 300+0.1*distance*cos(frameCount/25+PI*i);
            yPos = 300-0.1*distance*sin(frameCount/25+PI*i);
            if (i == 0) { // white
                stroke(100,100,100,50);
                strokeWeight(2);
            }
            else if (i == 1) { // gray
                stroke(240,240,240,50);
                strokeWeight(2);
            }
            ellipse(xPos,yPos,widthMapped+20,widthMapped+20);
        }
}