
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1,bob2,bob3,bob4,bob5;
var roof1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
bob1 = new bob(200,450,40);
bob2 = new bob(280,450,40);
bob3= new bob(360,450,40);
bob4 = new bob(440,450,40);
bob5 = new bob(520,450,40);


roof1 = new roof(400,200,600,40);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
 
  drawSprites();
 
}



