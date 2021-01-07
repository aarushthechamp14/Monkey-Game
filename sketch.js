var monkey ,monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
  monkey = createSprite(100,300);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,340,600,20);
  ground.velocityX = -6;
  

  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
}


function draw() {
  createCanvas(400,400);
  background("skyblue");
  
  
  survivalTime = survivalTime + 1 ;
     
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: " + survivalTime,160,50)
  
  
  
  if(keyDown("shift")){
    monkey.velocityY = -8;
  }
  
  monkey.velocityY = monkey.velocityY + 1;
  
  if(ground.width/2){
     ground.x = 200;
  }

  monkey.collide(ground);
  
  food();
  obstacles();
  
 
  drawSprites();
}

function food(){
 if(frameCount % 80 === 0){
   banana = createSprite(400,Math.round(random(120,200)));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -6;
   banana.lifetime = 100;
   
   foodGroup.add(banana);
 }
  
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,300);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -8;
    obstacle.lifetime = 100;
    
    obstacleGroup.add(obstacle);
  }
  
}



