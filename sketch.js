const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //polygon holder with strings
  polygon = new Polygon(50,200,20);
  sling = new Slingshot(polygon.body,{x: 100, y: 200});

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //level 1
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level 2
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level 3
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top 
  block16 = new Block(390,155,30,40);

  //stand2 level 1 
  block17 = new Block(640,175,30,40);
  block18 = new Block(670,175,30,40);
  block19 = new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21 = new Block(760,175,30,40);

  //stand2 level 2
  block22 = new Block(670,135,30,40);
  block23 = new Block(700,135,30,40);
  block24 = new Block(730,135,30,40);

  //stand2 top
  block25 = new Block(700,95,30,40);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  ground.display();
  stand1.display();
  stand2.display(); 

  //level 1 block
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //level 2 block
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //level 3 block
  block13.display();
  block14.display();
  block15.display();

  //top block
  block16.display();

  //stand2 level 1 
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //stand2 level 2
  block22.display();
  block23.display();
  block24.display();

  //stand2 top
  block25.display();

  sling.display(); 
  polygon.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(polygon.body);
  }
}