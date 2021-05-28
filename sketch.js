// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

// var engine, world;
// var box1, pig1,pig3;
// var backgroundImg,platform;
// var bird, slingshot;

// var gameState = "onSling";
// var bg = "sprites/bg1.png";
// var score = 0;

// function preload() {
//     getBackgroundImg();
// }

// function setup(){
//     var canvas = createCanvas(1200,400);
//     engine = Engine.create();
//     world = engine.world;


//     ground = new Ground(600,height,1200,20);
//     platform = new Ground(150, 305, 300, 170);

//     box1 = new Box(700,320,70,70);
//     box2 = new Box(920,320,70,70);
//     pig1 = new Pig(810, 350);
//     log1 = new Log(810,260,300, PI/2);

//     box3 = new Box(700,240,70,70);
//     box4 = new Box(920,240,70,70);
//     pig3 = new Pig(810, 220);

//     log3 =  new Log(810,180,300, PI/2);

//     box5 = new Box(810,160,70,70);
//     log4 = new Log(760,120,150, PI/7);
//     log5 = new Log(870,120,150, -PI/7);

//     bird = new Bird(200,50);

//     //log6 = new Log(230,180,80, PI/2);
//     slingshot = new SlingShot(bird.body,{x:200, y:50});
// }

// function draw(){
//     if(backgroundImg)
//         background(backgroundImg);
    
//         noStroke();
//         textSize(35)
//         fill("white")
//         text("Score  " + score, width-300, 50)
    
//     Engine.update(engine);
//     //strokeWeight(4);
//     box1.display();
//     box2.display();
//     ground.display();
//     pig1.display();
//     pig1.score();
//     log1.display();

//     box3.display();
//     box4.display();
//     pig3.display();
//     pig3.score();
//     log3.display();

//     box5.display();
//     log4.display();
//     log5.display();

//     bird.display();
//     platform.display();
//     //log6.display();
//     slingshot.display();    
// }

// function mouseDragged(){
//     if (gameState!=="launched"){
//         Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//     }
// }


// function mouseReleased(){
//     slingshot.fly();
//     gameState = "launched";
// }

// function keyPressed(){
//     if(keyCode === 32){
//        // slingshot.attach(bird.body);
//     }
// }

// async function getBackgroundImg(){
//     var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//     var responseJSON = await response.json();

//     var datetime = responseJSON.datetime;
//     var hour = datetime.slice(11,13);
    
//     if(hour>=06 && hour<=19){
//         bg = "sprites/bg1.png";
//     }
//     else{
//         bg = "sprites/bg2.jpg";
//     }

//     backgroundImg = loadImage(bg);
//     console.log(backgroundImg);
// }

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bg = "sprites/bg1.png";
var polygon_img;

var score=0;
this.Visibility=255;

function preload() {
    getBackgroundImg();

    polygon_img=loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(720,600,1500,25);
    ground2 = new Ground(720,10,1500,25);
    ground3 = new Ground(2,20,20,1500)

    line1 = new Ground(560,470,20,80)
    line3 = new Ground(720,470,20,80)
    line2 = new Ground(640,520,140,15)

    lines1 = new Ground(50,100,20,100);
    lines2 = new Ground(100,60,80,20);
    lines3 = new Ground(100,140,80,20);

    //block supporter
    stand1 = new Stand(750,330,240,10);
    stand2 = new Stand(380,370,280,10);
    //block 1[down to up]
    block1 = new Box(300,275,30,40);
    console.log(block1);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
    //level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    //level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    //top
    block16 = new Box(390,155,30,40);
  
    //set 2 for second stand
    //level one
    blocks1 = new Box(640,165,30,40);
   blocks2 = new Box(670,175,30,40);
    blocks3 = new Box(700,175,30,40);
    blocks4 = new Box(730,175,30,40);
    blocks5 = new Box(760,175,30,40);
    //level two
    blocks6 = new Box(670,135,30,40);
   blocks7 = new Box(700,135,30,40);
    blocks8 = new Box(730,135,30,40);
//top
    blocks9 = new Box(700,95,30,40);
  
    ball=Bodies.circle(1420,330,20);
    World.add(world,this.ball);

    slingShot = new Slingshot(this.ball,{x:1100,y:300})
    
  

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("red");
    stand1.display();
    stand2.display();

    ground1.display();
    ground2.display();
    ground3.display();

    line1.display();
    line2.display();
    line3.display();

    lines1.display();
   lines3.display();
   lines2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();


  fill("skyblue");
  
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
 blocks8.display();
 fill("pink")
 blocks9.display();
 

push();
imageMode(CENTER);
image(polygon_img,ball.position.x,ball.position.y,40,40);
pop();

slingShot.display();
    
}

function mouseDragged()
{
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
    
}

function mouseReleased()
  {
    slingShot.fly();
   
  }

  function keyPressed()
{

    if(keyCode===32)
    {
        
        slingShot.attach(this.ball);
       
    }

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=23){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

