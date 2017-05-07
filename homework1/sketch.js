var s; // keep track of the diameter of the current circle

function setup() {
    createCanvas(500, 500);
    background(130,200,200);
    noStroke();
    s = 500*sqrt(2); 
}

function draw() { // this function will iterate forever (refresh in certain frequency)
    // draw the background
    while (s >= 500) { // no need to loop further as s < 500
        noStroke();
        fill(127, 127, 122,200); // color of gray
        ellipse(250, 250, s, s);
        fill(237, 237, 99); // color of grayish-yellow
        ellipse(250, 250, s-10, s-10);
        s -= 20;
    }
    // draw my minion's face
    fill(255, 255, 35);
    ellipse(250,250,s+4,s+4);
    
    // draw my minion's glass (for the single eye) black bar and gray circle
            // some calculation was done on papers to determine the coordinates
    fill(40);
    beginShape();
    vertex(250-260*cos(PI/12.0), 250-250*sin(PI/14.0)); // lower-left
    vertex(250+260*cos(PI/12.0), 250-250*sin(PI/14.0)); // lower-right
    vertex(250+260*cos(PI/6.0), 250-250*sin(PI/6.0)); // upper-right
    vertex(250-260*cos(PI/6.0), 250-250*sin(PI/6.0)); // upper-left
    endShape(CLOSE);
    fill(175,175,155);
    ellipse(250,250-250*(sin(PI/6.0)+sin(PI/14.0))/2,230,230);
    
//    draw my minion's eye 
    // white part
    stroke(255, 204, 0);
    strokeWeight(6);
    fill(255,255,255);
    ellipse(250,250-250*(sin(PI/6.0)+sin(PI/14.0))/2,170,170);
    // black part
    fill(0,0,0);
    x = 250;
    y = 250-250*(sin(PI/6.0)+sin(PI/14.0))/2.0;
    ellipse(x,y,70,70);
    // little moving while dot
    x = 230 + random(-2,2);
    y = 250-270*(sin(PI/6.0)+sin(PI/14.0))/2.0 + random(-2,2);
    fill(255);
    noStroke();
    ellipse(x,y,20,20);
    
//    draw the mouth
    stroke(0);
    strokeWeight(8);
    noFill();
    arc(235,350,200,50,-0.05,2.0);
}
