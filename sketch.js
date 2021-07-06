var ship, ship_moving;
var backgroundImage;
function preload(){
  backgroundImage = loadImage("sea.png");
  ship = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png",)
    
}

function setup(){
  createCanvas(2000,2000);
  
  backGround = createSprite(400, 400, 100, 100);
  backGround.addImage(backgroundImage);
  backGround.scale = 0.5;
  ship = createSprite(400, 400, 100, 100);
  ship.addAnimation("ship")
  
}

function draw() {
  background("white");
  drawSprites()
 
}