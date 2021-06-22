const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero,monster,ground;
var x;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(500,550,250);
  monster = new Monster(1100,550,300);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  
  if(keyIsDown(UP_ARROW)){
    camera.position.x =displayWidth/2;
    camera.position.y =hero.y;

  }

  hero.display();
  monster.display();

}
