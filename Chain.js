class Chain{
    constructor(bodyA,bodyB){
        var opptions={
        bodyA:bodyA,
        bodyB:bodyB,
        length:20,
        stiffness:0.7
        }
        this.chain=Constraint.create(opptions)
        World.add(world,this.chain);
        
    }
display(){
  var pointA=this.chain.bodyA.position;
  var pointB=this.chain.bodyB.position;
  stroke (0,0,255);
  strokeWeight(3);
  line (pointA.x,pointA.y,pointB.x,pointB.y);
}

}
