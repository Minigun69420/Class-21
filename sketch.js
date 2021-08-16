function setup() {
  createCanvas(800,400);
  box1 = createSprite(200,200,100,100);
  box2 = createSprite(300,150,50,150);

}

function draw() {
  background("yellow");  
  box1.x = mouseX
  box1.y = mouseY
  if(isTouching(box1,box2)){
    box1.shapeColor = "blue"
    box2.shapeColor = "blue"
  }
  else{
  box1.shapeColor = "green"
  box2.shapeColor = "green"
  }
  
  
  drawSprites();
  
}
