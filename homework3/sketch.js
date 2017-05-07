var colorOfCubes = [[250, 250, 250, 80],[170,170,170,80]]; // white amd gray
var poem = ["B L A C K","W H I T E","W R O N G","R I G H T","D A R K","L I G H T","B L I N D","S I G H T"];
var distance;
var dToOrigin;
var xPos;
var yPos;
var clickTimes;
var speed = 3;
function setup() {
    var myCanvas = createCanvas(windowWidth - 200, windowHeight - 200);
    myCanvas.parent();
    background(0);
    clickTimes = 0;
    xPos = 0;
    distance = 0;

}
// png can be transparent (alpha value) while jpg does not have that transparency feature
function draw() {
    
    distance = distance + speed;
    if (distance >= (windowHeight + windowWidth) * 0.6 ) {
        speed = -speed;
    }
    else if (distance <= 0) {
        speed = -speed;
    }

    // decide how big the two circles are based on mouse position
    dToOrigin = dist(windowWidth/2,windowHeight/2,mouseX,mouseY); 
    widthMapped = map(dToOrigin,0,dist(250,250,500,500),windowWidth/15,windowWidth/12);
    if (clickTimes % 2 == 1) {
        CircleDancing();
        fill(0);
        noStroke();
        textSize(random(20,40));
        text(poem[clickTimes%8], mouseX + 20, mouseY + 20);
    }
    else {
        CubeDancing();
        noStroke();
        fill(255);
        textSize(random(10,30));
        text(poem[clickTimes%8], mouseX - 20, mouseY - 20);
    }
    rateOfDrawing = map(distance,0,(windowHeight + windowWidth) * 0.65,60,80);
    frameRate(rateOfDrawing);
}

function mousePressed() {
    clickTimes++;
}

function CubeDancing() {
        background(250-distance/0.001,250-distance/0.001,250-distance/0.001,4);
        for (var i = 0; i < 2; i++) {
            fill(colorOfCubes[i]);
            xPos = 100 + (windowWidth-100) / 2 +0.1*distance*cos(frameCount/25+PI*i)-40;
            yPos = (windowHeight-200) / 2 -0.1*distance*sin(frameCount/25+PI*i)-20;
            if (i == 0) {
                stroke(100,100,100,50);
                strokeWeight(2);
            }
            else if (i == 1) {
                stroke(240,240,240,50);
                strokeWeight(2);
            }
            rect(xPos-widthMapped/2,yPos-widthMapped/2,widthMapped,widthMapped);
        }
}

function CircleDancing() {
        background(distance/0.001,distance/0.001,distance/0.001,4);
        for (var i = 0; i < 2; i++) {
            fill(colorOfCubes[i]);
            xPos = 100 + (windowWidth -100)/ 2 +0.1*distance*cos(frameCount/25+PI*i);
            yPos = (windowHeight -200)  / 2 -0.1*distance*sin(frameCount/25+PI*i);
            if (i == 0) {
                stroke(100,100,100,50);
                strokeWeight(2);
            }
            else if (i == 1) {
                stroke(240,240,240,50);
                strokeWeight(2);
            }
            ellipse(xPos,yPos,widthMapped+20,widthMapped+20);
        }
}

function windowResized(){
    resizeCanvas(windowWidth - 200, windowHeight - 200);
    background(0);
}