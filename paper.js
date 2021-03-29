class Paper{
    constructor(x,y,radius){
    var Options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body= Bodies.circle(x,y,radius,Options);
    this.radius=radius
    World.add(world,this.body)
}
display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("white");
    ellipse(pos.x,pos.y,this.radius,this.radius);
}
}