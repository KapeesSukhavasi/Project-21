var bullet, wall; 
var speed, weight;
var damage, thickness; 

function setup() {
  createCanvas(1300,400);

  speed = random(223,321);

  weight = random(30,52);

  bullet = createSprite(50,200,40,20);
  bullet.shapeColor = "white";

  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);

  fill("white");
  textSize(20);
  text("Damage: " + damage,450,50); 

  if(bullet.collide(wall)) {
    speed = 0;
    if(damage > 10) {
      wall.shapeColor = color(255,0,0);
    }
    if(damage <= 10) {
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}
