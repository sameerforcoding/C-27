
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var bobObjects1=createSprite(300,450,50,50);
	var bobObjects2=createSprite(400,450,50,50);
	var bobObjects3=createSprite(500,450,50,50);
	var bobObjects4=createSprite(600,450,50,50);
  
Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();

}



