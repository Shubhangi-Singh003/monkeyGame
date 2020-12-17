
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("walking",monkey_running);
  monkey.scale = 0.1;
 ground = createSprite(400,350,900,10);
  ground.velocityX = -4
ground.x = ground.width /2;
  console.log(ground.x)
 FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
 background("white");

  ground.velocityX= -4;
  if(ground.x<0){
 ground.x =ground.width/2
  }
  if(keyDown("space")&& monkey.y>=100){
  monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
   stroke("white")
  textSize(20);
  fill("white");
  text("score:"+ score, 500,50);
  stroke("black");
  textSize(20)
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+ survivalTime , 100,50);
   spawnBanana();
   spawnObstacle();
  drawSprites();
}

 function spawnBanana(){
   if (frameCount %80 === 0){
var banana = createSprite(400,200,10,10);
     banana.y = Math.round(random(120,200));
     banana.velocityX = -6;
    banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.lifetime = 400;
     banana.depth = monkey.depth;
     monkey.depth = monkey.depth+1;
      FoodGroup.add(banana);
   }
  
 }
 
 function spawnObstacle(){
   if (frameCount % 300 === 0){
 var obstacle = createSprite(400,340,50,20);
   
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.velocityX = -4;
     obstacle.lifetime = 400;
   } 
 }




