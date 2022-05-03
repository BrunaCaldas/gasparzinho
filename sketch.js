var torreImg, torre;
var portaImg, porta, portasGroup;
var gradeImg, grade, gradesGroup;
var gaspar, gasparImg;
var invisivelBlockGroup, invisivelBlock;
var gameState = "play"

function preload(){
  torreImg = loadImage("tower.png");
  portaImg = loadImage("door.png");
  gradeImg = loadImage("climber.png");
  gasparImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  torre = createSprite(300,300);
  torre.addImage("torre",torreImg);
  torre.velocityY = 1;
  portasGroup = new Group();
  gradesGroup = new Group();
  invisivelBlockGroup = new Group();
  gaspar = createSprite(200,200);
  gaspar.addImage("gaspar",gasparImg);
  gaspar.scale = 0.3
}

function draw() {
  background(200);
  if(gameState === "play"){

  if(torre.y > 400){
      torre.y = 300
    }
    if(keyDown("space")){
    gaspar.velocityY =-10
    }
    gaspar.velocityY +=1;
    if(keyDown("right")){
    gaspar.x +=3
    }
    if(keyDown("left")){
      gaspar.x -=3
      }
    if(gradesGroup.isTouching(gaspar)){
      gaspar.velocityY = 0;
    }
    if(invisivelBlockGroup.isTouching(gaspar)||gaspar.y > 600){
      gameState = "fim de jogo"
    }
    portas();
    drawSprites();
    
}if(gameState  === "fim de jogo"){
  text("já era",280,300)
}

}
function portas(){
if(frameCount%240 === 0){
porta = createSprite(200,-50);
porta.addImage ("porta",portaImg);
porta.velocityY = 1;
porta.x = Math.round(random(120,400));
porta.lifetime = 800;
portasGroup.add(porta)

grade = createSprite(200,10);
grade.addImage ("grade",gradeImg);
grade.velocityY = 1;
grade.x = porta.x;
grade.lifetime = 800;
gradesGroup.add(grade)

invisivelBlock= createSprite(200,15,grade.width,2);
invisivelBlock.visible = false
invisivelBlock.velocityY = 1;
invisivelBlock.x = porta.x;
invisivelBlock.lifetime = 800;
invisivelBlockGroup.add(invisivelBlock)

gaspar.depth = porta.depth
gaspar.depth +=1

}


}