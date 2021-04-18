var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
   
    ball.velocityY = random(-10,10);
    ball.velocityX = random(-10,10);

    music.play();
   
}

function testHit(b, blk) {
    if(blk.isTouching(b) && b.bounceOff(blk)){
        b.shapeColor = blk.shapeColor;
        if(blk.shapeColor == "blue") {
            music.stop();
        } else if(blk.shapeColor == "orange") {
            b.velocityX += 4;
            b.velocityY += 4;
        } else if(blk.shapeColor == "red") {
            music.play();
        } else if(blk.shapeColor == "green") {
            b.velocityX -= 4;
            b.velocityY -= 4;
        }
    }
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    testHit(ball, block1);
    testHit(ball, block2);
    testHit(ball, block3);
    testHit(ball, block4);


    drawSprites();
}
