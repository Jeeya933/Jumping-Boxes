var canvas;
var music;
var box1, box2, box3, box4;
var moving;
var edge1, edge2, edge3, edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(700,599,150,50);
    box1.shapeColor = ("pink");

    box2 = createSprite(500,599,150,50)
    box2.shapeColor = ("purple");

    box3 = createSprite(300,599,150,50);
    box3.shapeColor = ("maroon");

    box4 = createSprite(100,599,150,50);
    box4.shapeColor = ("gray");

    moving = createSprite(random(20,470));
    moving.shapeColor = ("white");
    moving.width = 50;
    moving . height = 50;
    moving.velocityX = 5;
    moving.velocityY = 5;
    moving.x = 400;
    moving.y = 300;

    edge1 = createSprite(5,600,10,1500);
   edge1.shapeColor = ("black");
    //fine


    edge2 = createSprite(799,599,10,1500);
    edge2.shapeColor = ("black");
    //fine

    edge3 = createSprite(400,5,1000,10);
    edge3.shapeColor = ("black");


    edge4 = createSprite(800,600,10000,10);
    edge4.shapeColor = ("black");





    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    //background(rgb(169,169,169));
    background("black");
    //create edgeSprite
drawSprites();

if (moving.isTouching(edge1)){
    moving.bounceOff(edge1);
}

if (moving.isTouching(edge2)){
    moving.bounceOff(edge2);
}

if (moving.isTouching(edge3)){
    moving.bounceOff(edge3);
}

if (moving.isTouching(edge4)){
    moving.bounceOff(edge4);
}


if (moving.isTouching(box1)){
    moving.shapeColor = ("pink");
}

if (moving.isTouching(box2)){
    moving.shapeColor = ("purple");
}

if (moving.isTouching(box3)){
    moving.shapeColor = ("maroon");
}

if (moving.isTouching(box4)){
    moving.shapeColor = ("grey");
}
    //add condition to check if box touching surface and make it box


}

