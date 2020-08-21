var wall,thikness;
var bullet,speed,weight;

function setup() {
  createCanvas(1350,300);
  thikness=random(22,83);
  wall = createSprite(1250,height/2,thikness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,height/2,50,50);
  bullet.velocityX=speed;
}

function draw() {
  background(0);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thikness*thikness*thikness);
    if (damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if (damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}