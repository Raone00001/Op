const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ropeForce = 15;

var ground;
var stand1, stand2;

var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var bb1, bb2, bb3, bb4, bb5, bb6, bb7, bb8, bb9;

var hexagon;
var rope;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(500,300,250,10);
    stand2 = new Ground(880,250,200,10);

  //Stand 1 boxes. Row 1.
    b1 = new Box(590,280);
    b2 = new Box(560,280);
    b3 = new Box(530,280);
    b4 = new Box(500,280);
    b5 = new Box(470,280);
    b6 = new Box(440,280);
    b7 = new Box(410,280);
    

  //Stand 1 boxes. Row 2.
    b8 = new Box(560,240);
    b9 = new Box(530,240);
    b10 = new Box(500,240);
    b11 = new Box(470,240);
    b12 = new Box(440,240);

  //Stand 1 boxes. Row 3.
    b13 = new Box(530,200);
    b14 = new Box(500,200);
    b15 = new Box(470,200);

  //Stand 1 boxes. Row 4.
    b16 = new Box(500,160);

  //Stand 2 boxes. Row 1.
    bb1 = new Box(941,225);
    bb2 = new Box(911,225);
    bb3 = new Box(881,225);
    bb4 = new Box(851,225);
    bb5 = new Box(821,225);

  //Stand 2 boxes. Row 2.
    bb6 = new Box(911,185);
    bb7 = new Box(881,185);
    bb8 = new Box(851,185);

  //Stand 2 boxes. Row 3.
    bb9 = new Box(881,145);

    hexagon = new Polygon(180,150);

    rope = new SlingShot(hexagon.body,{x:180, y:150});

  Engine.run(engine);
}

function draw() {
  background("black"); 
    Engine.update(engine);

    fill("white");
    textSize(20);
    textFont("Cutive");
    text("Drag The Hexagonal Stone and Release It, To Launch It Towards The Boxes!", 290, 30);
    text("Press Space To Throw The Hexagon Again!", 410, 50);
  
    //Stand 1 boxes. Row 1.
      b1.display();
      b2.display();
      b3.display();
      b4.display();
      b5.display();
      b6.display();
      b7.display();

    //Stand 1 boxes. Row 2.
      b8.display();
      b9.display();
      b10.display();
      b11.display();
      b12.display();

    //Stand 1 boxes. Row 3.
      b13.display();
      b14.display();
      b15.display();

    //Stand 1 boxes. Row 4.
      b16.display();

    //Stand 2 boxes. Row 1.
      bb1.display();
      bb2.display();
      bb3.display();
      bb4.display();
      bb5.display();

    //Stand 2 boxes. Row 2.
      bb6.display();
      bb7.display();
      bb8.display();
    
    //Stand 2 boxes. Row 3.
      bb9.display();

      ground.display();
      stand1.display();
      stand2.display();

      hexagon.display();
      rope.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){

	if (keyCode === 32){

		Matter.Body.setPosition(hexagon.body, {x:180, y:150})
		rope.attach(hexagon.body);

	}

}