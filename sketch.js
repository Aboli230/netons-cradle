
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new roof(400,200,10,10);
	rope=new rope(400,300,10,10);
	bobobj1=new bob(200,100,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope.display();
  roof.display();
  bobobj1();
  
  drawSprites();
 
}



