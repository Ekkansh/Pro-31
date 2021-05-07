const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var div1, div2, div3, div4, div5;
var ground;

var particles=[]
var plinkos=[]

function setup() {
  createCanvas(400,690);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(200, 680, 400, 15);
 div1 = new Division(0, 590, 10, 300);
 div2 = new Division(100, 590, 10, 300);
 div3 = new Division(200, 590, 10, 300);
 div4 = new Division(300, 590, 10, 300);
 div5 = new Division(400, 590, 10, 300);

 for(var i = 50; i<width; i=i+50){
   plinkos.push(new Plinko(i, 50));
 }
for(var k =25; k<width; k=k+50){
  plinkos.push(new Plinko(k, 100));
}

for(var l =50; l<width; l=l+50){
  plinkos.push(new Plinko(l, 150));
}

for(var m =50; m<width; m=m+50){
  plinkos.push(new Plinko(m, 150));
}
for(var n =50; n<width; n=n+50){
  plinkos.push(new Plinko(n, 150));
}
}

function draw() {
  background(0);
  Engine.update(engine);
  
  
 ground.display();
 div1.display();
 div2.display();
 div3.display();
 div4.display();
 div5.display();
 for(var j =0; j<plinkos.length; j++){
   plinkos[j].display();

 } 
 

 if(frameCount%60===0){
    particles.push(new Particle(random(50, 350), 0));
    
  
}

for(var n =0; n<particles.length;n++){
  particles[n].display();

} 
}


  
