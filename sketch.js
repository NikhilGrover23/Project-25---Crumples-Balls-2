const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var bucket1, bucket2, bucket3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,450,70)
	ground = new Ground(width/2,670,width,20);
	bucket1 = new Bucket(1000,400,20,100);
	bucket2 = new Bucket(1200,400,20,100);
	bucket3 = new Bucket(1100,450,220,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  ground.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
  drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:250,y:-250});
    }
}




