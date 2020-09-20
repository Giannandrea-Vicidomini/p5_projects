class Particle{
    constructor(x,y,mass,drawFunc,drawMode){

        //positional properties
        this.position = createVector(x,y)
        this.velocity = createVector(0,0)
        this.acceleration = createVector(0,0)

        //other
        this.mass = mass
        this.radius = 10*mass
        this.f = drawFunc
        this.m = drawMode

        //angular properties
        this.angle = 0
        this.angularVelocity = 0
        this.angularAcceleration = 0
    }

    update(){
        this.position.add(this.velocity)
        this.velocity.add(this.acceleration)

        this.angle+=this.angularVelocity
        this.angularVelocity+=this.angularAcceleration

        this.angularAcceleration = 0
        this.acceleration.mult(0);
    }

    show(c){
        push()
        this.m(CENTER)
        noStroke()
        fill(c)
        translate(this.position.x,this.position.y)
        rotate(radians(this.angle))
        this.f(0,0,this.radius,this.radius)
        
        pop()
    }

    edges(){
        if(this.position.x + this.radius/2 > width){
            
            this.position.x = width-this.radius/2
            this.velocity.x*=-1
        }
        if(this.position.x - this.radius/2 < 0){
            
           this.position.x = 0+this.radius/2
            this.velocity.x*=-1
        }
        if(this.position.y + this.radius/2 > height){
            
            this.position.y = height-this.radius/2
            this.velocity.y*=-1
        }
        if(this.position.y - this.radius/2 < 0){
            
            this.position.y = 0+this.radius/2
            this.velocity.y*=-1
        }
    }

    applyForce(force){
        let acc = p5.Vector.div(force,this.mass) //(force.copy()).div(this.mass)
        //console.log("inside: "+acc);
        this.acceleration.add(acc)
    }

    applyTorque(aForce){
        this.angularAcceleration+=aForce
    }

    normalisedVelocity(){
        return this.velocity.copy().normalize()
    }

    dragVector(){
        return this.normalisedVelocity().mult(-1).mult(this.velocity.magSq())
    }

}