const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var option={
    isStatic:true
  }
  
  ground=Bodies.rectangle(200, 390, 400, 20, option);
  World.add(world,ground)

  var option={
    restitution:1,
    density:0.2
  }

  ball=Bodies.circle(200, 100, 20, option);
  World.add(world,ball)
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background("pink");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20)

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20)
  drawSprites();
}