var fixedrect, movingrect



function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  fixedrect = createSprite(200,200,50,50)
  movingrect = createSprite(400,400,50,50);
  fixedrect.shapeColor= "red";
  movingrect.shapeColor ="red";
}

function draw() {
  background("black");
movingrect.x=mouseX
movingrect.y=mouseY


if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
  movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
  
  ){
    fixedrect.shapeColor= "green";
    movingrect.shapeColor ="yellow";


  }
else{
  fixedrect.shapeColor= "red";
  movingrect.shapeColor ="red";

}


  drawSprites();
}