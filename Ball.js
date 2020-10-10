class Ball {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:1.0,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body)
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("purple");
      fill("purple");
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
}

