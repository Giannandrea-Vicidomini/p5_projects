let particles = []
let distv
let mag

function setup() {
	createCanvas(900, 500);
	frameRate(60)

	//p = new Particle(width/2,height/2,3,rect,rectMode)
	//particles.push(p)
	
}

function draw() {
	background(240)
	
	for(let p of particles){

		let gravity = createVector(0,2)
		let air = p.dragVector().mult(0.003)
		
		//console.log("Velocity ="+p.velocity);
		
		p.applyForce(gravity)
		p.applyForce(air)
		p.update()
		p.edges()
		p.show(color(255,0,255,100));
	}
	showCannon()
}

function mousePressed(){
	
	let c = distv.copy().normalize()
	let p = new Particle(30+c.x*80,height-30+c.y*80,3,rect,rectMode)
	p.applyForce(c.mult(mag*0.4))
	p.applyTorque(random(-20,20))
	particles.push(p)
	

}

function showCannon(){
	push()
	translate(30,height-30)
	ellipseMode(CENTER)
	let pos = createVector(mouseX,mouseY)
	distv = p5.Vector.sub(pos,createVector(0,height))
	mag = distv.mag()

	let costheta = distv.x/mag
	let angle = acos(costheta)
	stroke(255,0,0)
	strokeWeight(4)
	line(0,0,distv.x-20,distv.y+20)

	//console.log((`${mag*costheta},${distv.x}`));
	//console.log(acos(costheta))
	noStroke()
	rectMode(CENTER)
	fill(43)
	//console.log(angle);
	rotate(-angle);
	rect(50,0,100,40)
	fill(12)
	ellipse(0,0,60,60)
	pop()
}