const World = Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;

//creating my own physics engine
var engine;
var world;
var box;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={ 
    isStatic:true
  }
  var box_options={
    restitution:1 
  }




  ground=Bodies.rectangle(400,390,1600,10, ground_options);
  World.add(world, ground); //adding the ground to my world


  box=Bodies.rectangle(100, 200, 50, 50, box_options);
  World.add(world, box);
  console.log(ground.position);
}

function draw() {
  background(0,0,0);  
//updating the engine
  Engine.run(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 1600, 10);
  fill("cyan")
  rect(box.position.x, box.position.y, 50, 50)
  drawSprites();
}