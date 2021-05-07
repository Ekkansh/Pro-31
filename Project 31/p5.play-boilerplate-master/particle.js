class Particle{
    constructor(x, y){
        var op={
            restitution: 1,
            density: 0.2,
        }
    this.body = Bodies.circle(x, y, 10, op);
    World.add(world, this.body);
    this.color=color(random(0, 255), random(0,255), random(0, 255));
    }
    display(){
            push();
            fill(this.color);
            ellipseMode(RADIUS);
            ellipse(this.body.position.x, this.body.position.y, 10,10);
            pop();
        
    }
}