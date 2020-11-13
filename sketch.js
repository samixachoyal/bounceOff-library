var fixedRect,movingRect;

var gameobject1,gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100, 50, 80);
  fixedRect.shapeColor = "cyan";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "cyan";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY  = 5;

  gameobject1 = createSprite(200,100,50,50);
  gameobject1.shapeColor ="lime";
  gameobject1.velocityX = 3;
  gameobject2 = createSprite(800,100,50,50);
  gameobject2.shapeColor ="lightblue";
  gameobject2.velocityX = -3;


}

function draw() {
  background(0);

  bounceOff(gameobject1,gameobject2);
  bounceOff(fixedRect,movingRect);

  console.log(movingRect.x-fixedRect.x);
 
  drawSprites();
}

function bounceOff(object1,object2){

  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2){
object1.velocityX = object1.velocityX*(-1)
object2.velocityX = object2.velocityX*(-1)

    }
    if(object1.y-object2.y<object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2){
      object1.velocityY = object1.velocityY*(-1)
      object2.velocityY = object2.velocityY*(-1)
  }



}