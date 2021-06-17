var balloon1,balloonImage1,balloonImage2;
var datebase,position;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon1=createSprite(250,450,150,150);
  balloon1.addAnimation("hotAirBalloon",balloonImage1);
  balloon1.scale=0.5;

  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value",readHeight,showError)

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);
  if(height!==undefined){

  if(keyDown(LEFT_ARROW)){
    balloon1.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(10,0);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon1.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(-10,0);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon1.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,10);
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon1.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,-10);
    //write code to move air balloon in down direction
  }}

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
database.ref('balloon/height').set({
  x : height.x+x,
  y : height.y+y
})
}
function readHeight(data){
height = data.val();
balloon1.x = height.x;
balloon1.y = height.y;
}

function showError(){
  console.log("Error in writing to the database")
}