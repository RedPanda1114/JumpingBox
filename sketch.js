var block1, block2, block3, block4;
var box, edges, music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    block1 = createSprite(100,585,190,20);
    block1.shapeColor = "blue";

    block2 = createSprite(300,585,190,20);
    block2.shapeColor = "orange";

    block3 = createSprite(500,585,190,20);
    block3.shapeColor = "purple";

    block4 = createSprite(700,585,190,20);
    block4.shapeColor = "green";

    box = createSprite(random(20,750),random(20,750),20,20);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 8;

}

function draw() {
    music.loop();

    background(rgb(169,169,169));

    edges = createEdgeSprites();

    box.bounceOff(edges);

    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor = "blue";
    }

    if(block2.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor = "orange";
    }

    if(block3.isTouching(box)){
        box.shapeColor = "purple";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor = "green";
    }

    drawSprites();

    fill("black");
    text(mouseX + "," + mouseY, 5, 20);
}
