const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(800,450);
  engine = Engine.create();
  world = engine.world; 

  ground = new Ground (400,400,5,1600);
  for(var k = 0; k <= width; k = k + 80){
    division.push(new Divisions(k ,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 40; j <= width ; j=j+50){
      plinkos.push(new Plinko(j,75))
  }
  for(var j = 15; j <= width-10 ; j=j+50){
    plinkos.push(new Plinko(j,175))
}
  for(var j = 10; j <= width-10 ; j=j+50){
    plinkos.push(new Plinko(j,275))
}
  for(var j = 5; j <= width-10 ; j=j+50){
    plinkos.push(new Plinko(j,275))
}
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
}
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
}
  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-10,width/2+10,10,10)));
  }


}

function draw() {
  background("black");  
  Engine.update(engine);
  
  ground.display();
  division.display();
  plinko.dislay();
  particle.display();

}