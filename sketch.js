const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,
  world,
  ball,
  rope,
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9,
  box10,
  box11,
  box12,
  box13,
  box14,
  box15;

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;

  var options = {
    density: 1.5,
    frictionAir: 0.005,
  };
  ball = Bodies.circle(500, 400, 50, options);
  World.add(world, ball);
  var options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(750, 750, 1500, 20, options);
  World.add(world, ground);
  box1 = new Box(1000, 300, 80, 80);
  rope = new Rope(ball, { x: 50, y: 100 });
}

function draw() {
  background("grey");
  Engine.update(engine);
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50, 50);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 1500, 20);
  box1.display();
  rope.display();
}
