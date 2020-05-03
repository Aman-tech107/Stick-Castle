const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground, roof1, roof2;

function setup() {
  var canvas = createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(120,350,40,200);
  box2 = new Box(130,350,20,180);
  box3 = new Box(140,350,20,180);
  box4 = new Box(150,350,20,180);
  box5 = new Box(160,350,20,180);
  box6 = new Box(170,350,20,180);
  box7 = new Box(180,350,20,180);
  box8 = new Box(190,350,20,180);
  box9 = new Box(200,350,20,180);
  box10 = new Box(210,350,20,180);
  box11 = new Box(220,350,20,180);
  box12 = new Box(230,350,20,180);
  box13 = new Box(230,350,20,180);
  box14 = new Box(230,350,20,180);
  box15 = new Box(240,350,40,200);
  box16 = new Box(190,40,258,10);
  box17 = new Box(190,30,240,10);
  box18 = new Box(190,20,222,10);
  box19 = new Box(190,10,206,10);
  box20 = new Box(190,0,188,10);
  box21 = new Box(190,-10,170,10);
  box22 = new Box(190,-20,152,10);
  box23 = new Box(190,-30,136,10);
  box24 = new Box(190,-40,118,10);
  box25 = new Box(190,-50,100,10);

  ground = new Ground(200,380,400,20);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  fill("Grey");
  box1.display();
  box15.display();
  fill("Brown");
  box2.display();
  box4.display();
  box6.display();
  box8.display();
  box10.display();
  box12.display();
  box14.display();
  box16.display();
  box18.display();
  box20.display();
  box22.display();
  box24.display();

  //box16.display();
  fill("Yellow");
  box3.display();
  box5.display();
  box7.display();
  box9.display();
  box11.display();
  box13.display();
  box17.display();
  box19.display();
  box21.display();
  box23.display();
  box25.display();
  fill("#252525");
  ground.display();

  drawSprites();
}