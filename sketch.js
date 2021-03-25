var balloon, balloonImg;
var back;

function preload(){

balloonImg = loadAnimation("hotairballoon1.png", "hotairballoon2.png", "hotairballoon3.png")
back = loadImage("cityImage.png")





}

function setup(){

  createCanvas(1500, 700);

  balloon = createSprite(750, 350, 50, 50);
  balloon.addAnimation("airballoon", balloonImg);
  balloon.scale = 0.5;




}

function draw(){

  background(back);

  // Left Arrow
  if (keyWentDown('LEFT_ARROW')){

    balloon.velocityX = -5;
    
  }

  if (keyWentUp('LEFT_ARROW')){

    balloon.velocityX = 0;

  }

  if (keyWentDown('RIGHT_ARROW')){

    balloon.velocityX = 5;

  }

  if (keyWentUp('RIGHT_ARROW')){

    balloon.velocityX = 0;

  }

  if (keyWentDown('UP_ARROW')){

    balloon.velocityY = -5;

  }

  if (keyWentUp('UP_ARROW')){

    balloon.velocityY = 0;

  }

  if (keyWentDown('DOWN_ARROW')){

    balloon.velocityY = 5;
    
  }

  if (keyWentUp('DOWN_ARROW')){

    balloon.velocityY = 0;

  }

  if (keyDown('UP_ARROW')){

    balloon.scale = balloon.scale - 0.009;

  }

  if (keyDown('DOWN_ARROW')){

    balloon.scale = balloon.scale + 0.009;

  }
  drawSprites();

  fill(0);
  stroke("red");
  textSize(25);
  text("Use the arrow Keys to move the balloon",40,40);

}