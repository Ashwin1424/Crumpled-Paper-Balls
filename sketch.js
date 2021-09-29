var ball;
var groundObj, leftSide, rightSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
	let engine;
	let world;


function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 670, 20, 120);
	rightSide = new Ground(1200, 670, 20, 120);

	var ballOptions = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.12
	}
	//Create the Bodies Here.
	ball = Bodies.circle(200, 10, 20, ballOptions);
	World.add(world, ball);
	
	Engine.run(Engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  Engine.update(engine);

	groundObj.show();
	leftSide.show();
	rightSide.show();
	ellipse(ball.position.x, ball.position.y, 20)

	keyPressed();
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
	}
}