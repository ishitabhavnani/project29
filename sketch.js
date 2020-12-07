
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var ball ;
var tree;
var boy;
var chain;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,680,800,40);
    ball= new Ball(15,500,50);
    tree= new Tree(600,400,50,80);
    boy=new Boy(10,450,80,100);
    chain=new Chain(ball.body,{x:59,y:523});
    m1=new Mango(650,150,25);
    m2=new Mango(560,200,25); 
    m3=new Mango(500,300,25); 
    m4=new Mango(550,360,25); 
    m5=new Mango(600,290,25); 
    m6=new Mango(650,350,25); 
    m7=new Mango(690,270,25); 
    m8=new Mango(710,200,25); 
    m9=new Mango(800,300,25); 
    m10=new Mango(730,320,25); 
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  boy.display();
  tree.display();
  ball.display();
  chain.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  detectCollision(ball,m1);
  detectCollision(ball,m2);
  detectCollision(ball,m3);
  detectCollision(ball,m4);
  detectCollision(ball,m5);
  detectCollision(ball,m6);
  detectCollision(ball,m7);
  detectCollision(ball,m8);
  detectCollision(ball,m9);
  detectCollision(ball,m10);
 keyPressed();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body , {x: mouseX , y:mouseY})
}



function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist( stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x , mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(ball.body, {x:59,y:520})
    chain.attach(ball.body)
  }
}
function mouseReleased(){
  chain.fly()
}


