
var moving,fixed;

function setup() {
  createCanvas(800,400);
  moving =  createSprite(100, 200, 50, 80);
  fixed =  createSprite(500, 200, 80, 50);

  moving.shapeColor = "red";
fixed.shapeColor = "green"

moving.velocityX =3;
fixed.velocityX = -3;

}

function draw() {
  background("lightblue");  

  //moving.x =mouseX;
  //moving.y = mouseY;

  console.log(fixed.x-moving.x)


//collision detection
/*
  if(fixed.x-moving.x <= fixed.width/2 + moving.width/2&&
    moving.x-fixed.x <= fixed.width/2 + moving.width/2&&
    fixed.y-moving.y <= fixed.height/2 + moving.height/2&&
    moving.y-fixed.y <= fixed.height/2 + moving.height/2){
    moving.shapeColor = "black";
    fixed.shapeColor = "black"
  }
  else{
    moving.shapeColor = "red";
    fixed.shapeColor = "green"
  }
*/

//bounceOff 

if(fixed.x-moving.x <= fixed.width/2 + moving.width/2&&
  moving.x-fixed.x <= fixed.width/2 + moving.width/2){
      moving.velocityX = moving.velocityX * -1;
      fixed.velocityX = fixed.velocityX * -1;
  }
  
  if(fixed.y-moving.y <= fixed.height/2 + moving.height/2&&
  moving.y-fixed.y <= fixed.height/2 + moving.height/2){
       moving.velocityY *= -1;
       fixed.velocityY *= -1;
  }
 


  drawSprites();
}