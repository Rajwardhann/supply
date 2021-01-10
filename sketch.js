var helicopter,helicopterImg;
var packageImg;
var container1,container2,container3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterImg = loadImage("helicopter.png");
	packageImg = loadImage("package.png");

}

function setup(){
	createCanvas(800,400);

	engine = Engine.create();
	world = engine.world

	packagebody = Bodies.rectangle(360,100,30,30, {isStatic:true})
	World.add(world,packagebody)
   
	packagesprite = createSprite(360,100,30,30);
	packagesprite.addImage(packageImg);
	packagesprite.scale = 0.15;

	helicopter  = createSprite(360,100,50,50);
	helicopter.addImage(helicopterImg);
	helicopter.scale = 0.45;

	container1 = new box1(320,300,20,100);	
	container2 = new box1(360,345,100,20);
	container3 = new box1(400,300,20,100);

}

function draw(){
	background("black");
	Engine.update(engine);

	
	packagesprite.x = packagebody.position.x
    packagesprite.y = packagebody.position.y;
	keyPressed();
	container1.display();
	container2.display();
	container3.display();

	
	drawSprites();

}
function keyPressed()
{

	if(keyDown("down"))
	{
		Matter.Body.setStatic(packagebody, false);
	}
}
