var PLAY = 1;
var END = 0;
var gameState = 1;
var fruit1,fruit2,fruit3,fruit4

var sword;
var swordimg;
var score = 0;
var swords;
var go;



function preload(){
  swordimg = loadImage("sword.png");
  f1img = loadImage("fruit1.png");
  f2img = loadImage("fruit2.png");
  f3img = loadImage("fruit3.png");
  f4img = loadImage("fruit4.png");
  alien_coming = loadAnimation("alien1.png","alien2.png")
  gameoverimg = loadImage("gameover.png")
  swords = loadSound("knifeSwooshSound.mp3");
  go = loadSound("gameover.mp3")
}

function setup(){
  createCanvas(400,400);
  sword = createSprite();
  sword.addImage(swordimg)
  sword.scale = 0.4;
  sword.debug = false;
  
  fruitgroup1 = new Group();
  fruitgroup2 = new Group();
  fruitgroup3 = new Group();
  fruitgroup4 = new Group();
  aliengroup = new Group();
  
  
}


 
function draw(){
  background(180)
  if (gameState === PLAY){
    sword.y = mouseY;
  sword.x = mouseX;
    
    var select_fruit = Math.round(random(1,5));
  console.log(select_fruit)
  
  
  if (World.frameCount % 80 == 0) {
    if (select_fruit == 1) {
      fruit1();
    } else if (select_fruit == 2) {
      fruit2();
    } else if (select_fruit == 3) {
      fruit3();
    } else if (select_fruit == 4) {
      fruit4();
    } else if (select_fruit == 5) {
      alien();
    }
  }
    
    if (sword.isTouching(fruitgroup1)){
        fruitgroup1.destroyEach();
      score = score+1;
      swords.play();
      
        }
     if (sword.isTouching(fruitgroup2)){
        fruitgroup2.destroyEach();
       score = score+1;
       swords.play();
        }
     if (sword.isTouching(fruitgroup3)){
        fruitgroup3.destroyEach();
     score = score+1;   
       swords.play();
     }
     if (sword.isTouching(fruitgroup4)){
        fruitgroup4.destroyEach();
     score = score+1;   
       swords.play();
     }
     if (sword.isTouching(aliengroup)){
        aliengroup.destroyEach();
      gameState = END;
       go.play();
        }
    
    
    
  }
  else if (gameState === END){
     
    sword.addImage(gameoverimg)
    sword.x = 200
    sword.y = 200
    sword.scale = 1;
    fruitgroup4.destroyEach();
    fruitgroup3.destroyEach();    
    fruitgroup2.destroyEach();
    fruitgroup1.destroyEach();
    aliengroup.destroyEach();
    
    
    
  }
  
text("score : "+score,190,20);

  
  
 
  
 
  drawSprites();
}
function fruit1(){
  var f1 = createSprite (400,Math.round(random(20, 370)), 10, 10);
  f1.velocityX = -3
  f1.addImage(f1img);
  f1.scale = 0.2;
  fruitgroup1.add(f1);
}
function fruit2(){
  var f2 = createSprite (400,Math.round(random(20, 370)), 10, 10);
  f2.velocityX = -3
  f2.addImage(f2img);
  f2.scale = 0.2; 
  fruitgroup2.add(f2);
}
function fruit3(){
 var f3 = createSprite (400,Math.round(random(20, 370)), 10, 10);
  f3.velocityX = -3
  f3.addImage(f3img);
  f3.scale = 0.2;
  fruitgroup3.add(f3);
}
function fruit4(){
  var f4 = createSprite (400,Math.round(random(20, 370)), 10, 10);
  f4.velocityX = -3
  f4.addImage(f4img);
  f4.scale = 0.13;
  fruitgroup4.add(f4);
}
function alien(){
  var a1 = createSprite (400,Math.round(random(20, 370)), 10, 10); 
  a1.velocityX = -3
  a1.addAnimation("coming",alien_coming)
  a1.scale = 0.7;
  aliengroup.add(a1);
}
