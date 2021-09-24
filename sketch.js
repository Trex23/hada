var starImg,bgImg;
var star, starBody;
var hada, fairyImg;
var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg=loadAnimation("fairyImage1.png","fairyImage2.png");
	sound=loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
	sound.play();
	//crea el sprite del hada, y agrega la animación para el hada
	hada=createSprite(100,500);
	hada.addAnimation("hada",fairyImg);
	hada.scale=0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  
	
  //escribe aquí el código para detener la estrella en la mano del hada
	if((star.y>464 &&starBody.position.y>464)&&(hada.x>542&&hada.x<640)){
		Matter.Body.setStatic(starBody,true);
	}
	if(keyDown("left")){
		hada.x=hada.x-4;
	}
  
  	if(keyDown("right")){
		hada.x=hada.x+4;
	}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}
