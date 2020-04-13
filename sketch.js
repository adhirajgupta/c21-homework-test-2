var earth , earthimg;
var mercury , mercuryimg;
var venus,venusimg;
var mars,marsimg;
var jupiter,jupiterimg;
var saturn,saturnimg;
var uranus,uranusimg;
var neptune,neptuneimg;
var sun,sunimg;
var topright;
var lowerright;
var topleft;
var lowerleft;

function preload(){
mercuryimg = loadImage("mercury.jpg");
venusimg = loadImage("venus.jpg");
earthimg = loadImage("earth.jpg");
marsimg = loadImage("mars.jpg");
jupiterimg = loadImage("jupiter.jpg");
saturnimg = loadImage("saturn.jpg");
uranusimg = loadImage("uranus.jpg");
neptuneimg = loadImage("neptune.jpg");
sunimg = loadImage("sun.jpg");

}
function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
  mercury = createSprite(100,200,100,10);
  mercury.addImage("vvvvhkvhkvh",mercuryimg)
  mercury.scale = 0.05;
  mercury.velocityX = 3;
  mercury.setCollider("circle",0,0,950);
  mercury.debug = true;

 /* venus = createSprite(350,200,100,10);
  venus.addImage("vvvvhkvhkvh",venusimg)
  venus.scale = 0.1;
  earth = createSprite(600,200,100,10);
  earth.addImage("vvvvhkvhkvh",earthimg)
  earth.scale = 0.45;
  mars = createSprite(850,200,100,10);
  mars.addImage("vvvvhkvhkvh",marsimg);
  mars.scale = 0.1;
  jupiter = createSprite(1150,200,100,10);
  jupiter.addImage("vvvvhkvhkvh",jupiterimg);
  jupiter.scale = 0.1;
  saturn = createSprite(1525,200,100,10);
  saturn.addImage("vvvvhkvhkvh",saturnimg);
  saturn.scale = 0.05;
  uranus = createSprite(1850,200,100,10);
  uranus.addImage("vvvvhkvhkvh",uranusimg);
  uranus.scale = 0.1;
  neptune = createSprite(2200,200,100,10);
  neptune.addImage("vvvvhkvhkvh",neptuneimg);
  neptune.scale = 0.35;
  sun = createSprite(1200/2,400,100,10);
  sun.addImage("vvvvhkvhkvh",sunimg);
  sun.scale = 0.15;
  */topright = createSprite(1100,200,100,100);
  topright.shapeColor = "red";
  topright.visible = true;
  topright.debug = true
}

function draw() {
  background(255);  
  console.log(mercury.x);
  console.log(mercury.y)
/*  venus.setCollider("circle",0,0,550);
  venus.debug = true;
  venus.velocityX = 3;
  earth.setCollider("circle",0,0,100);
  earth.debug = true;
  earth.velocityX = 3 
  jupiter.setCollider("circle",0,0,750);
  jupiter.debug = true
  jupiter.velocityX = 3 ;
  mars.setCollider("circle",0,0,550);
  mars.debug = true;
  mars.velocityX = 3 ;
  saturn.setCollider("circle",0,0,900);
  saturn.debug = true;
  saturn.velocityX = 3 
  uranus.setCollider("circle",0,0,550);
  uranus.debug = true;
  uranus.velocityX = 3 
  neptune.setCollider("circle",0,0,180);
  neptune.debug = true;
  neptune.velocityX = 3 
  sun.setCollider("circle",0,0,700);
  sun.debug = true;
  algorithm1();
  algorithm2();
  algorithm3();
 algorithm4();
  algorithm5();
  algorithm6();
  algorithm7();
  algorithm8();
*/
if(isTouching(mercury,topright)){
//mercury.velocityX = 0;
 mercury.velocityY = -5;
}
//if(isTouching(merc))
  drawSprites();
}

/*function algorithm1(){
if(mercury.x-topright.x<mercury.width/2+topright.width/2){
  mercury.velocityY = 5;
  //mercury.velocityX = -20;
}
}
function algorithm2(){
  if(venus.x-topright.x===0&&venus.y-topright.y === 0){
    venus.velocityY = 5;
    venus.velocityX = -20;
  }
  }
  
  function algorithm3(){
    if(earth.x-topright.x===0&&earth.y-topright.y === 0){
      earth.velocityY = 5;
      earth.velocityX = -20;
    }
    }
    function algorithm4(){
      if(mars.x-topright.x===0&&mars.y-topright.y === 0){
        mars.velocityY = 5;
        mars.velocityX = -20;
      }
      }
      function algorithm5(){
        if(jupiter.x-topright.x===0&&jupiter.y-topright.y === 0){
          jupiter.velocityY = 5;
          jupiter.velocityX = -20;
        }
        }
        function algorithm6(){
          if(saturn.x-topright.x===0&&saturn.y-topright.y === 0){
            saturn.velocityY = 5;
            saturn.velocityX = -20;
          }
          }
          function algorithm7(){
            if(uranus.x-topright.x===0&&uranus.y-topright.y === 0){
              uranus.velocityY = 5;
              uranus.velocityX = -20;
            }
            }
            function algorithm8(){
              if(neptune.x-topright.x===0&&neptune.y-topright.y === 0){
                neptune.velocityY = 5;
                neptune.velocityX = -20;
              }
            */