let factor = 40
let ps;
let posX,posY;
function setup() {
	
	createCanvas(windowWidth, 600);
	//p=new Particle(width/2,height/2,30,30)
	ps=[]
}	

function draw(){
	background(255)
	for(let p of ps){
		p.move(random(-10,+10),random(-10,+10))
		p.show()
		//print(p)
	}
	
	/* background(0)
	plotAxises()
	push()
	translate(width/2,height/2)
	stroke(255)
	for(let x = -width/2;x<width/2;x+=0.001){
		point(x*factor,-(Math.sin(x))*factor);
	}
	pop()
	
	createVector();	 */

}

/* function mousePressed(){
	ps.push(new Particle(mouseX,mouseY,30,30))
} */

function mousePressed(){
	posX=mouseX;
	posY=mouseY;
}

function mouseReleased(){
	let d=dist(posX,posY,mouseX,mouseY)
	ps.push(new Particle(posX,posY,d*2,d*2))
}

/* function plotAxises(){
	stroke(0,255,0);
	line(width/2,0,width/2,height)
	stroke(255,0,0);
	line(0,height/2,width,height/2)
}

 */

class Particle{
	constructor(x,y,radius1,radius2){
		this.history=[]
		this.x=x
		this.y=y
		this.radius1=radius1
		this.radius2=radius2
	}

	show(){
		
		

		for(let i = 0;i<this.history.length; i++){
			let v = this.history[i]
			noStroke()
			fill(0,0,0,i*0.8)
			ellipse(v.x,v.y,this.radius1,this.radius2)
		}
		stroke(0)
		fill(0)
		ellipse(this.x,this.y,this.radius1,this.radius2)

	}

	move(x,y){
		let v = createVector(this.x,this.y)
		this.history.push(v)
		this.x+=x
		this.y+=y
		if(this.history.length>20){
			this.history.splice(0,1)
			
		}
	}
}