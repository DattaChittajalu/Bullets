var thickness, wall
var speed, weight, bullet
var deformation
function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  thickness=random(22,83)
  weight=random(30,52)
  bullet=createSprite(50,200,50,5)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)

  bullet.velocityX=speed;
}

function draw() {
  background("black")
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness)

    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0)  
    }
  }

    drawSprites();
}

function hasCollided(lbullet,lwall){
  //bulletRightEdge=bullet.x +bullet.width
  //wallLeftEdge=wall.x
  if (lwall.x-lbullet.x<=lwall.width/2+lbullet.width/2){
    return true
  }
  else{
    return false 
  }
}