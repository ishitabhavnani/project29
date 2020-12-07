class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length:2
            
        }
        this.pointB= pointB
        this.body = Constraint.create(options);
        World.add(myWorld, this.body);
    }

    display(){

        if (this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.body.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly(){
      this.body.bodyA=null;
    }

    
    attach(bodyA){
        this.body.bodyA = bodyA;
    }
}
