const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper,D1,ground;

function preload(){

}

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

   //Create the Bodies Here.
   paper = new Paper(200,300,70);

   ground = new Ground(600,height,1200,20);

   D1= new Dustbin(690,680);
	Engine.run(engine);

  
  Slingshot = new Launcher(paper.body,{x:200, y:300});
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  drawSprites();
  
  ground.display();
  D1.display();
  paper.display();
  Slingshot.display(); 
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  Slingshot.fly();
}